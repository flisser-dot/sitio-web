const computerHost = document.getElementById('formation-computer');
const computerCanvas = document.getElementById('formation-computer-canvas');
const computerScreen = document.getElementById('formation-os');
const computerStatus = document.getElementById('formation-computer-status');

async function prepareComputer() {
    try {
        const THREE = await import('three');
        const { RoundedBoxGeometry } = await import('three/addons/geometries/RoundedBoxGeometry.js');
        const renderer = new THREE.WebGLRenderer({ canvas: computerCanvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.05;
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-4, 4, 3.5, -3.5, .1, 30);
        camera.position.set(1.3, 1.9, 10);
        camera.lookAt(0, .15, .2);
        const device = new THREE.Group();
        scene.add(device);

        scene.add(new THREE.HemisphereLight(0xf2f0e9, 0x352544, 1.3));
        const key = new THREE.DirectionalLight(0xfffcf5, 1.8);
        key.position.set(-4, 6, 7);
        scene.add(key);
        const fill = new THREE.DirectionalLight(0x9878ff, .32);
        fill.position.set(5, 2, 4);
        scene.add(fill);

        const shell = new THREE.MeshStandardMaterial({ color: 0xded8c8, roughness: .84, metalness: 0 });
        const inset = new THREE.MeshStandardMaterial({ color: 0xb9b0a0, roughness: .92, metalness: 0 });
        const dark = new THREE.MeshStandardMaterial({ color: 0x29242e, roughness: .94 });
        const keys = new THREE.MeshStandardMaterial({ color: 0xf2f0e9, roughness: .86 });
        const lavender = new THREE.MeshStandardMaterial({ color: 0x9878ff, roughness: .78 });
        const screenRim = new THREE.MeshStandardMaterial({ color: 0x49345f, roughness: .82, emissive: 0x21112f, emissiveIntensity: .08 });
        const screenMaterial = new THREE.MeshStandardMaterial({ color: 0x25144b, roughness: .72, emissive: 0x7040ff, emissiveIntensity: .055 });

        function box(width, height, depth, radius, material, position) {
            const mesh = new THREE.Mesh(new RoundedBoxGeometry(width, height, depth, 4, radius), material);
            mesh.position.set(...position);
            device.add(mesh);
            return mesh;
        }

        box(4.75, 4.65, 1.65, .34, shell, [0, .37, -.08]);
        box(4.2, 3.57, .1, .24, inset, [0, .83, .8]);
        box(4.03, 3.43, .1, .23, dark, [0, .83, .9]);
        box(4.11, 3.51, .055, .235, screenRim, [0, .83, .972]);
        box(3.95, 3.35, .1, .23, screenMaterial, [0, .83, 1]);
        box(4.35, .38, 1.9, .16, shell, [0, -1.81, 1]);
        box(3.9, .045, 1.04, .04, inset, [0, -1.605, 1.2]);
        for (let row = 0; row < 2; row++) {
            for (let column = 0; column < 10; column++) {
                box(.29, .065, .23, .02, row === 0 && column === 0 ? lavender : keys, [-1.55 + column * .342, -1.55, .82 + row * .33]);
            }
        }
        box(1.5, .065, .23, .02, keys, [0, -1.55, 1.5]);
        box(1.24, .095, .055, .02, dark, [1.12, -1.21, .78]);
        box(.26, .22, .07, .025, inset, [1.48, -1.2, .85]);
        const power = new THREE.Mesh(new THREE.CircleGeometry(.028, 16), new THREE.MeshBasicMaterial({ color: 0x8d829b }));
        power.position.set(1.96, -1.38, .8);
        device.add(power);
        for (let vent = 0; vent < 6; vent++) {
            box(.065, .42, .03, .015, dark, [-1.86 + vent * .19, -1.23, .78]);
        }
        for (let row = 0; row < 3; row++) {
            for (let column = 0; column < 5; column++) {
                box(.025, .08, .09, .01, dark, [2.38, -.6 - row * .17, -.44 + column * .21]);
            }
        }

        const shadowCanvas = document.createElement('canvas');
        shadowCanvas.width = 128;
        shadowCanvas.height = 128;
        const shadowContext = shadowCanvas.getContext('2d');
        const gradient = shadowContext.createRadialGradient(64, 64, 2, 64, 64, 58);
        gradient.addColorStop(0, 'rgba(45,22,70,.24)');
        gradient.addColorStop(.48, 'rgba(45,22,70,.14)');
        gradient.addColorStop(1, 'rgba(45,22,70,0)');
        shadowContext.fillStyle = gradient;
        shadowContext.fillRect(0, 0, 128, 128);
        const shadow = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 1.35), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(shadowCanvas), transparent: true, depthWrite: false }));
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.set(.12, -2.24, .32);
        scene.add(shadow);

        const contactCanvas = document.createElement('canvas');
        contactCanvas.width = 128;
        contactCanvas.height = 128;
        const contactContext = contactCanvas.getContext('2d');
        const contactGradient = contactContext.createRadialGradient(64, 64, 2, 64, 64, 58);
        contactGradient.addColorStop(0, 'rgba(24,13,37,.3)');
        contactGradient.addColorStop(.42, 'rgba(42,22,64,.17)');
        contactGradient.addColorStop(1, 'rgba(42,22,64,0)');
        contactContext.fillStyle = contactGradient;
        contactContext.fillRect(0, 0, 128, 128);
        const contactShadow = new THREE.Mesh(new THREE.PlaneGeometry(5.3, .62), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(contactCanvas), transparent: true, depthWrite: false }));
        contactShadow.rotation.x = -Math.PI / 2;
        contactShadow.position.set(.08, -2.19, .52);
        scene.add(contactShadow);

        function resizeComputer() {
            const width = computerHost.clientWidth;
            const height = computerHost.clientHeight;
            if (!width || !height) return;
            const aspect = width / height;
            const vertical = Math.max(6.2, 5.6 / aspect);
            camera.left = -vertical * aspect / 2;
            camera.right = vertical * aspect / 2;
            camera.top = vertical / 2;
            camera.bottom = -vertical / 2;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
            function projectScreen(position) {
                const point = new THREE.Vector3(...position).project(camera);
                return { x: (point.x + 1) / 2 * width, y: (1 - point.y) / 2 * height };
            }
            const topLeft = projectScreen([-1.94, 2.49, 1.06]);
            const topRight = projectScreen([1.94, 2.49, 1.06]);
            const bottomLeft = projectScreen([-1.94, -.79, 1.06]);
            const horizontal = { x: topRight.x - topLeft.x, y: topRight.y - topLeft.y };
            const verticalEdge = { x: bottomLeft.x - topLeft.x, y: bottomLeft.y - topLeft.y };
            const screenWidth = Math.hypot(horizontal.x, horizontal.y);
            const screenHeight = Math.hypot(verticalEdge.x, verticalEdge.y);
            computerScreen.style.left = topLeft.x + 'px';
            computerScreen.style.top = topLeft.y + 'px';
            computerScreen.style.width = screenWidth + 'px';
            computerScreen.style.height = screenHeight + 'px';
            computerScreen.style.transformOrigin = '0 0';
            computerScreen.style.transform = `matrix(${horizontal.x / screenWidth}, ${horizontal.y / screenWidth}, ${verticalEdge.x / screenHeight}, ${verticalEdge.y / screenHeight}, 0, 0)`;
            renderer.render(scene, camera);
        }

        resizeComputer();
        await document.fonts.ready;
        await renderer.compileAsync(scene, camera);
        resizeComputer();
        const observer = new ResizeObserver(resizeComputer);
        observer.observe(computerHost);
        computerHost.dataset.render = 'ready';
        computerHost.setAttribute('aria-busy', 'false');
        computerStatus.hidden = true;
        computerHost.querySelectorAll('[data-category]').forEach((button) => {
            button.addEventListener('pointerenter', () => { screenMaterial.emissiveIntensity = .22; renderer.render(scene, camera); });
            button.addEventListener('pointerleave', () => { screenMaterial.emissiveIntensity = .12; renderer.render(scene, camera); });
            button.addEventListener('focus', () => { screenMaterial.emissiveIntensity = .22; renderer.render(scene, camera); });
            button.addEventListener('blur', () => { screenMaterial.emissiveIntensity = .12; renderer.render(scene, camera); });
        });
        computerCanvas.addEventListener('webglcontextlost', (event) => {
            event.preventDefault();
            observer.disconnect();
            computerHost.dataset.render = 'fallback';
            computerHost.setAttribute('aria-busy', 'false');
            computerCanvas.hidden = true;
            computerScreen.removeAttribute('style');
        });
    } catch (error) {
        computerHost.dataset.render = 'fallback';
        computerHost.setAttribute('aria-busy', 'false');
        computerCanvas.hidden = true;
        computerStatus.hidden = true;
        computerScreen.removeAttribute('style');
    }
}

prepareComputer();