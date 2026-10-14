const toolsDetails = document.querySelectorAll('.tools-page .guide-section details');
const toolsMobile = window.matchMedia('(max-width: 700px)');

toolsDetails.forEach((details, index) => {
    const summary = details.querySelector('summary');
    const body = details.querySelector('.tools-module-body');
    const state = details.querySelector('.tools-module-state');
    summary.id = `tools-summary-${index}`;
    if (body) {
        summary.setAttribute('aria-controls', body.id);
        body.setAttribute('role', 'region');
        body.setAttribute('aria-labelledby', summary.id);
    }
    const updateState = () => {
        summary.setAttribute('aria-expanded', String(details.open));
        if (state) {
            state.textContent = details.classList.contains('is-complete')
                ? '✓ Checklist completa'
                : details.open ? 'Abierto' : 'Leer';
        }
    };
    const close = document.createElement('button');
    close.type = 'button';
    close.className = 'tools-close';
    close.textContent = 'Cerrar sección ↑';
    close.setAttribute('aria-label', `Cerrar: ${summary.querySelector('strong')?.textContent || summary.textContent}`);
    close.addEventListener('click', () => {
        details.open = false;
        updateState();
        summary.focus();
    });
    (body || details).append(close);
    details.addEventListener('toggle', () => {
        if (details.open && toolsMobile.matches) {
            const section = details.closest('.guide-section');
            section.querySelectorAll('details[open]').forEach(other => {
                if (other !== details) other.open = false;
            });
        }
        updateState();
    });
    updateState();
});

const toolsChecklist = document.querySelector('.tools-checklist');
const toolsTasks = Array.from(toolsChecklist.querySelectorAll('input[type="checkbox"]'));
const toolsProgress = document.querySelector('#tools-progress');
const toolsProgressText = document.querySelector('#tools-progress-text');
const toolsResult = document.querySelector('.tools-checklist-result');
const toolsAccountModule = document.querySelector('#acceso-cuentas');

function updateToolsProgress() {
    const completed = toolsTasks.filter(task => task.checked).length;
    const complete = completed === toolsTasks.length;
    toolsProgress.value = completed;
    toolsProgress.textContent = `${completed} de ${toolsTasks.length}`;
    toolsProgressText.textContent = `${completed} DE ${toolsTasks.length} TAREAS COMPLETADAS${complete ? '. ¡Checklist completada! Ya revisaste estas recomendaciones.' : ''}`;
    toolsResult.hidden = !complete;
    toolsAccountModule.classList.toggle('is-complete', complete);
    const state = toolsAccountModule.querySelector('.tools-module-state');
    if (state) {
        state.textContent = complete
            ? '✓ Checklist completa'
            : toolsAccountModule.open ? 'Abierto' : 'Leer';
    }
}
toolsChecklist.addEventListener('change', updateToolsProgress);
updateToolsProgress();

const toolsNavigationTabs = Array.from(document.querySelectorAll('.tools-navigation [role="tab"]'));
const toolsNavigationSections = toolsNavigationTabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));

function selectToolsSection(selectedIndex) {
    toolsNavigationTabs.forEach((tab, index) => {
        const selected = index === selectedIndex;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        if (!selected) {
            toolsNavigationSections[index].querySelectorAll('details[open]').forEach(details => {
                details.open = false;
                details.querySelector('summary').setAttribute('aria-expanded', 'false');
            });
        }
        toolsNavigationSections[index].hidden = !selected;
    });
}

toolsNavigationTabs.forEach((tab, index) => {
    const section = toolsNavigationSections[index];
    section.setAttribute('role', 'tabpanel');
    section.setAttribute('aria-labelledby', tab.id);
    section.tabIndex = 0;
    tab.addEventListener('click', () => selectToolsSection(index));
    tab.addEventListener('keydown', event => {
        let nextIndex = index;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % toolsNavigationTabs.length;
        else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + toolsNavigationTabs.length) % toolsNavigationTabs.length;
        else if (event.key === 'Home') nextIndex = 0;
        else if (event.key === 'End') nextIndex = toolsNavigationTabs.length - 1;
        else return;
        event.preventDefault();
        selectToolsSection(nextIndex);
        toolsNavigationTabs[nextIndex].focus({ preventScroll: true });
    });
});

document.querySelector('.tools-skip').addEventListener('click', () => selectToolsSection(0));
selectToolsSection(0);

const toolsCover = document.querySelector('.tools-page .guide-cover');
const toolsCoverObjects = Array.from(document.querySelectorAll('.tools-cover-object'));
const toolsReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (toolsCover && toolsCoverObjects.length && !toolsReduceMotion.matches) {
    let pointerX = 0;
    let pointerY = 0;
    let pointerFrame = 0;
    let touchResetTimer;

    const resetCoverObjects = () => {
        if (pointerFrame) cancelAnimationFrame(pointerFrame);
        pointerFrame = 0;
        toolsCoverObjects.forEach(image => {
            image.style.setProperty('--pointer-shift-x', '0px');
            image.style.setProperty('--pointer-shift-y', '0px');
        });
    };

    const moveCoverObjects = event => {
        pointerX = event.clientX;
        pointerY = event.clientY;
        if (pointerFrame) return;

        pointerFrame = requestAnimationFrame(() => {
            pointerFrame = 0;
            const radius = 150;
            toolsCoverObjects.forEach(image => {
                const rect = image.getBoundingClientRect();
                const deltaX = rect.left + rect.width / 2 - pointerX;
                const deltaY = rect.top + rect.height / 2 - pointerY;
                const distance = Math.hypot(deltaX, deltaY);
                const strength = Math.max(0, 1 - distance / radius);
                const amount = distance ? (strength * 26) / distance : 0;
                image.style.setProperty('--pointer-shift-x', `${deltaX * amount}px`);
                image.style.setProperty('--pointer-shift-y', `${deltaY * amount}px`);
            });
        });
    };

    toolsCover.addEventListener('pointermove', event => {
        if (event.pointerType !== 'touch') moveCoverObjects(event);
    });
    toolsCover.addEventListener('pointerdown', event => {
        if (event.pointerType !== 'touch') return;
        clearTimeout(touchResetTimer);
        moveCoverObjects(event);
        touchResetTimer = setTimeout(resetCoverObjects, 520);
    });
    toolsCover.addEventListener('pointerleave', event => {
        if (event.pointerType === 'touch') return;
        resetCoverObjects();
    });
}