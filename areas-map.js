const areas = [
    {
        id: 'diseno', group: 'crear', number: '01', icon: '◈', title: 'Diseño de juego', skills: ['Creatividad', 'Lógica', 'Observación'],
        summary: 'Define las reglas, los retos y el ritmo de cada partida.',
        what: 'Diseñar es decidir cómo se juega: qué puede hacer cada persona, qué desafíos encuentra y cómo evoluciona la experiencia.',
        tasks: ['Crear mecánicas y reglas.', 'Diseñar niveles, objetivos y progresión.', 'Probar ideas y ajustar el equilibrio.'],
        fits: 'Te gusta inventar sistemas, resolver problemas y pensar qué hace que una experiencia sea interesante.',
        start: 'Diseñá un juego de cartas sencillo o cambiá las reglas de uno que ya conozcas. Probalo con otras personas y anotá qué funciona.',
        teams: ['Arte y animación', 'Programación', 'UX y accesibilidad'], interests: ['crear', 'resolver', 'historias', 'equipo']
    },
    {
        id: 'arte', group: 'crear', number: '02', icon: '✧', title: 'Arte y animación', skills: ['Color y composición', 'Dibujo', 'Herramientas 2D/3D'],
        summary: 'Da forma a personajes, escenarios, objetos y movimiento.',
        what: 'El área visual construye la identidad del juego y convierte conceptos en imágenes que se pueden explorar e interpretar.',
        tasks: ['Explorar ideas visuales y referencias.', 'Crear arte 2D, modelos 3D, texturas o escenarios.', 'Preparar personajes y objetos para animación.'],
        fits: 'Disfrutás dibujar, observar detalles, combinar referencias o imaginar cómo se vería un mundo.',
        start: 'Rediseñá un objeto cotidiano como si perteneciera a un juego y armá una hoja con sus formas, colores y usos.',
        teams: ['Diseño de juego', 'Animación', 'Programación', 'Narrativa'], interests: ['crear', 'historias']
    },
    {
        id: 'narrativa', group: 'crear', number: '03', icon: '✎', title: 'Narrativa y escritura', skills: ['Escritura', 'Estructura', 'Empatía'],
        summary: 'Crea personajes, diálogos y mundos con historias propias.',
        what: 'La narrativa diseña cómo aparecen las historias dentro del juego: quiénes las cuentan, qué decisiones las cambian y cómo se relacionan con lo que se juega.',
        tasks: ['Escribir diálogos, escenas y trasfondos.', 'Diseñar historias ramificadas.', 'Coordinar textos con niveles y mecánicas.'],
        fits: 'Te gusta escribir, imaginar personajes, construir mundos o encontrar distintas formas de contar algo.',
        start: 'Escribí una escena breve con dos decisiones que lleven a resultados diferentes.',
        teams: ['Diseño de juego', 'Arte', 'Audio', 'Localización'], interests: ['crear', 'historias', 'equipo']
    },
    {
        id: 'musica', group: 'crear', number: '04', icon: '♫', title: 'Composición musical', skills: ['Ritmo', 'Composición', 'Escucha'],
        summary: 'Compone música que acompaña el tono y el ritmo del juego.',
        what: 'La música ayuda a construir atmósferas y acompaña momentos, espacios y cambios de la experiencia.',
        tasks: ['Componer temas y variaciones.', 'Adaptar la música a distintas situaciones.', 'Preparar piezas para su implementación.'],
        fits: 'Te interesa crear música, experimentar con sonidos o acompañar emociones con ritmo y melodía.',
        start: 'Creá una pieza corta para dos momentos distintos de un mismo nivel: calma y tensión.',
        teams: ['Diseño de sonido', 'Narrativa', 'Diseño de juego', 'Programación'], interests: ['crear', 'historias']
    },
    {
        id: 'audio-narrativa', group: 'crear', number: '05', icon: '◖', title: 'Diseño de sonido', skills: ['Escucha', 'Grabación', 'Edición de audio'],
        summary: 'Construye sonidos y ambientes que responden a lo que pasa.',
        what: 'El diseño de sonido crea e integra efectos, ambientes y voces para que el mundo del juego se sienta vivo y legible.',
        tasks: ['Grabar o crear efectos sonoros.', 'Editar voces y ambientes.', 'Integrar sonidos que reaccionan a las acciones.'],
        fits: 'Te gusta escuchar con atención, grabar, editar audio o descubrir cómo un sonido cambia una escena.',
        start: 'Grabá sonidos cotidianos y transformalos en tres efectos para un personaje o escenario.',
        teams: ['Composición musical', 'Programación', 'Diseño de juego', 'Narrativa'], interests: ['crear', 'resolver', 'historias']
    },
    {
        id: 'programacion', group: 'construir', number: '06', icon: '⌘', title: 'Programación', skills: ['Lógica', 'Resolución de problemas', 'Depuración'],
        summary: 'Convierte ideas y diseños en sistemas que funcionan.',
        what: 'El desarrollo implementa mecánicas y herramientas, conecta los sistemas del juego y los adapta a distintas plataformas.',
        tasks: ['Programar controles y comportamiento.', 'Conectar sistemas y herramientas.', 'Encontrar errores y optimizar rendimiento.'],
        fits: 'Te interesa entender cómo funcionan las cosas, resolver problemas o construir herramientas.',
        start: 'Probá modificar un proyecto guiado o programar una interacción pequeña en una herramienta para principiantes.',
        teams: ['Diseño de juego', 'Arte', 'UX', 'Calidad'], interests: ['resolver', 'equipo']
    },
    {
        id: 'ux', group: 'construir', number: '07', icon: '◎', title: 'UX y accesibilidad', skills: ['Empatía', 'Prototipado', 'Accesibilidad'],
        summary: 'Hace que jugar sea claro, cómodo y accesible.',
        what: 'UX observa cómo se entiende y se usa el juego. La interfaz y la accesibilidad ayudan a que más personas puedan jugar a su manera.',
        tasks: ['Diseñar menús e información en pantalla.', 'Probar flujos y detectar confusiones.', 'Proponer opciones de acceso y personalización.'],
        fits: 'Te interesa escuchar a otras personas, ordenar información y resolver barreras de uso.',
        start: 'Revisá un menú que uses y anotá tres cambios que podrían hacerlo más claro o accesible.',
        teams: ['Diseño de juego', 'Programación', 'Calidad', 'Arte'], interests: ['resolver', 'equipo']
    },
    {
        id: 'calidad', group: 'construir', number: '08', icon: '⌕', title: 'Calidad y testing', skills: ['Atención al detalle', 'Curiosidad', 'Comunicación clara'],
        summary: 'Prueba el juego y ayuda a detectar qué puede mejorar.',
        what: 'QA verifica versiones, documenta problemas de forma clara y comprueba que los cambios solucionen lo detectado.',
        tasks: ['Probar escenarios y dispositivos.', 'Registrar pasos para reproducir errores.', 'Volver a probar las correcciones.'],
        fits: 'Tenés curiosidad, paciencia y atención al detalle; te gusta descubrir por qué algo no salió como esperabas.',
        start: 'Probá un juego que conozcas con una lista de casos y describí un error de forma reproducible.',
        teams: ['Programación', 'Diseño de juego', 'UX', 'Localización'], interests: ['resolver']
    },
    {
        id: 'datos', group: 'construir', number: '09', icon: '▦', title: 'Datos y analítica', skills: ['Análisis', 'Hojas de cálculo', 'Comunicación'],
        summary: 'Usa datos para entender patrones y tomar decisiones.',
        what: 'El análisis de datos ayuda a interpretar cómo se juega, encontrar tendencias y evaluar cambios sin reemplazar la observación cualitativa.',
        tasks: ['Organizar y revisar datos.', 'Buscar patrones de uso y progreso.', 'Comunicar hallazgos al equipo.'],
        fits: 'Te gusta buscar patrones, trabajar con números y explicar qué podrían significar.',
        start: 'Registrá resultados de varias partidas en una tabla y buscá un patrón que responda una pregunta concreta.',
        teams: ['Diseño de juego', 'Producción', 'UX', 'Marketing'], interests: ['resolver']
    },
    {
        id: 'produccion', group: 'conectar', number: '10', icon: '◷', title: 'Producción', skills: ['Organización', 'Priorización', 'Comunicación'],
        summary: 'Coordina tiempos, prioridades y comunicación entre áreas.',
        what: 'Producción facilita el trabajo del equipo y ayuda a que los proyectos avancen con acuerdos claros y expectativas realistas.',
        tasks: ['Organizar etapas y prioridades.', 'Acompañar la comunicación del equipo.', 'Identificar riesgos y dependencias.'],
        fits: 'Te interesa organizar proyectos, facilitar acuerdos y ayudar a que un grupo trabaje en conjunto.',
        start: 'Organizá una actividad pequeña con otras personas, definí tareas y revisá cómo podrían coordinarse mejor.',
        teams: ['Todas las áreas'], interests: ['equipo', 'resolver']
    },
    {
        id: 'comunidad', group: 'conectar', number: '11', icon: '◌', title: 'Comunidad', skills: ['Escucha', 'Moderación', 'Comunicación'],
        summary: 'Escucha y acompaña a quienes juegan.',
        what: 'El trabajo de comunidad crea espacios de conversación, comparte información y ayuda a que el equipo comprenda a su público.',
        tasks: ['Moderar y cuidar espacios.', 'Escuchar preguntas y comentarios.', 'Compartir novedades y acercar respuestas.'],
        fits: 'Te gusta conversar, escuchar distintos puntos de vista y construir espacios de pertenencia.',
        start: 'Pensá reglas breves para una comunidad segura y cómo responderías a una consulta frecuente.',
        teams: ['Marketing', 'Producción', 'Narrativa', 'Esports'], interests: ['equipo', 'historias']
    },
    {
        id: 'marketing', group: 'conectar', number: '12', icon: '↗', title: 'Marketing y comunicación', skills: ['Escritura', 'Estrategia', 'Creatividad'],
        summary: 'Cuenta qué hace especial al juego y conecta con su público.',
        what: 'Marketing y comunicación definen cómo presentar un proyecto, a quién puede interesarle y qué información necesita conocer.',
        tasks: ['Preparar mensajes y contenidos.', 'Planificar campañas y materiales.', 'Coordinar anuncios con el equipo.'],
        fits: 'Te interesa comunicar ideas, crear contenidos o pensar cómo llegar a distintas audiencias.',
        start: 'Prepará una presentación breve de un juego que te guste para alguien que todavía no lo conoce.',
        teams: ['Comunidad', 'Producción', 'Arte', 'Publishing'], interests: ['crear', 'equipo', 'historias']
    },
    {
        id: 'traduccion', group: 'conectar', number: '13', icon: '文', title: 'Traducción y localización', skills: ['Idiomas', 'Escritura', 'Sensibilidad cultural'],
        summary: 'Adapta textos y experiencias a otros idiomas y contextos.',
        what: 'La localización adapta textos, referencias, formatos y elementos de interfaz para que el juego funcione en distintos lugares.',
        tasks: ['Traducir diálogos e interfaz.', 'Revisar tono y consistencia.', 'Probar textos dentro del juego.'],
        fits: 'Te gustan los idiomas, los matices culturales y encontrar la forma más clara de expresar una idea.',
        start: 'Compará dos versiones de un mismo texto de juego y anotá qué cambia en tono, humor o claridad.',
        teams: ['Narrativa', 'Calidad', 'Marketing', 'Producción'], interests: ['historias', 'equipo']
    },
    {
        id: 'esports', group: 'jugar', number: '14', icon: '⌁', title: 'Esports y competición', skills: ['Estrategia', 'Análisis', 'Coordinación'],
        summary: 'Organiza y desarrolla experiencias competitivas alrededor de los juegos.',
        what: 'El ecosistema competitivo incluye torneos, equipos, producción de eventos, análisis, comunicación y apoyo a quienes compiten.',
        tasks: ['Coordinar torneos y calendarios.', 'Analizar partidas y estrategias.', 'Producir transmisiones y eventos.'],
        fits: 'Te entusiasman la estrategia, los eventos en vivo, el trabajo en equipo o el análisis de partidas.',
        start: 'Organizá una partida amistosa con reglas claras y observá qué hace que la experiencia sea justa y disfrutable.',
        teams: ['Comunidad', 'Producción', 'Marketing', 'Diseño de juego'], interests: ['competir', 'equipo']
    },
    {
        id: 'coach', group: 'jugar', number: '15', icon: '♟', title: 'Coach de esports', skills: ['Comunicación', 'Análisis táctico', 'Liderazgo'],
        summary: 'Acompaña al equipo y prepara estrategias para competir.',
        what: 'La persona coach ayuda a un equipo a entrenar, analizar sus partidas y coordinar estrategias para mejorar su rendimiento.',
        tasks: ['Planificar entrenamientos y objetivos.', 'Revisar partidas y detectar oportunidades.', 'Dar devoluciones y adaptar estrategias con el equipo.'],
        fits: 'Te gusta analizar juegos, explicar ideas y ayudar a otras personas a crecer en equipo.',
        start: 'Elegí una partida competitiva, anotá decisiones clave y proponé una estrategia distinta para una próxima ronda.',
        teams: ['Jugadoras y jugadores', 'Analistas', 'Producción', 'Psicología deportiva'], interests: ['competir', 'equipo', 'resolver']
    },
    {
        id: 'arbitraje', group: 'jugar', number: '16', icon: '⚖', title: 'Árbitra de esports', skills: ['Reglamentos', 'Imparcialidad', 'Atención al detalle'],
        summary: 'Aplica las reglas y cuida que la competencia sea justa.',
        what: 'La árbitra supervisa las partidas, interpreta el reglamento y resuelve situaciones para que todas las personas compitan en las mismas condiciones.',
        tasks: ['Verificar que se cumplan las reglas.', 'Resolver consultas y disputas durante el torneo.', 'Registrar decisiones y comunicar sanciones con claridad.'],
        fits: 'Te interesa la justicia, prestar atención a los detalles y tomar decisiones claras con imparcialidad.',
        start: 'Armá reglas breves para un torneo amistoso y pensá cómo resolverías situaciones dudosas antes de que ocurran.',
        teams: ['Producción de torneos', 'Equipos', 'Comunidad', 'Organización'], interests: ['competir', 'resolver', 'equipo']
    }
];

const groups = [
    { id: 'crear', label: 'IMAGINAR Y CREAR', areas: 'Diseño · Arte · Narrativa · Música · Sonido', count: '5 ÁREAS', description: 'Imaginá reglas, mundos, personajes y sonidos que convierten una idea en una experiencia para jugar.' },
    { id: 'construir', label: 'CONSTRUIR Y MEJORAR', areas: 'Programación · UX · Calidad · Datos', count: '4 ÁREAS', description: 'Programá, probá y mejorá sistemas para que cada idea funcione y sea fácil de usar.' },
    { id: 'conectar', label: 'ORGANIZAR Y CONECTAR', areas: 'Producción · Comunidad · Marketing · Localización', count: '4 ÁREAS', description: 'Organizá el trabajo del equipo y acercá el juego a las personas que lo crean y lo juegan.' },
    { id: 'jugar', label: 'JUGAR Y COMPETIR', areas: 'Esports y competición · Coach · Árbitra de esports', count: '3 ÁREAS', description: 'Prepará competencias, equipos y eventos para que cada partida se convierta en espectáculo.' }
];

const groupLabels = Object.fromEntries(groups.map((group) => [group.id, group.label]));
const cardGroupLabels = { crear: 'CREACIÓN', construir: 'TECNOLOGÍA', conectar: 'EQUIPO', jugar: 'COMPETICIÓN' };
const areasGrid = document.querySelector('#areas-grid');
const areasEmpty = document.querySelector('#areas-empty');
const areasMap = document.querySelector('#areas-map');
const mapButtons = document.querySelectorAll('[data-map-group]');
const areasExplorer = document.querySelector('#areas-explorer');
const selectedGroupPanel = document.querySelector('#areas-selected-group');
const selectedGroupKicker = document.querySelector('#areas-selected-kicker');
const selectedGroupTitle = document.querySelector('#areas-selected-title');
const selectedGroupDescription = document.querySelector('#areas-selected-description');
const selectedGroupDisciplines = document.querySelector('#areas-selected-disciplines');
const selectedGroupCount = document.querySelector('#areas-selected-count');
const areaDialog = document.querySelector('#area-dialog');
const areaDialogBody = document.querySelector('#area-dialog-body');
let activeGroup = 'all';
const reduceAreaMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const spaceScenes = [...document.querySelectorAll('.areas-map, .areas-hero')];
const canRepelSpaceObjects = !reduceAreaMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const areaCardObserver = !reduceAreaMotion && 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -48px 0px', threshold: 0.08 })
    : null;

if (canRepelSpaceObjects) {
    spaceScenes.forEach((scene) => {
        const spaceObjects = [...scene.querySelectorAll('.areas-space-float')];
        if (!spaceObjects.length) return;

        let pointerX = 0;
        let pointerY = 0;
        let pointerFrame = 0;

        scene.addEventListener('pointermove', (event) => {
            if (event.pointerType !== 'mouse') return;
            pointerX = event.clientX;
            pointerY = event.clientY;
            if (pointerFrame) return;

            pointerFrame = requestAnimationFrame(() => {
                pointerFrame = 0;
                const radius = 120;
                const shifts = spaceObjects.map((image) => {
                    const rect = image.getBoundingClientRect();
                    const deltaX = rect.left + rect.width / 2 - pointerX;
                    const deltaY = rect.top + rect.height / 2 - pointerY;
                    const distance = Math.hypot(deltaX, deltaY);
                    const strength = Math.max(0, 1 - distance / radius);
                    const amount = distance ? (strength * 28) / distance : 0;
                    return [image, deltaX * amount, deltaY * amount];
                });

                shifts.forEach(([image, shiftX, shiftY]) => {
                    image.style.setProperty('--pointer-shift-x', `${shiftX}px`);
                    image.style.setProperty('--pointer-shift-y', `${shiftY}px`);
                });
            });
        });

        scene.addEventListener('pointerleave', () => {
            if (pointerFrame) cancelAnimationFrame(pointerFrame);
            pointerFrame = 0;
            spaceObjects.forEach((image) => {
                image.style.setProperty('--pointer-shift-x', '0px');
                image.style.setProperty('--pointer-shift-y', '0px');
            });
        });
    });
}

function renderAreas() {
    if (areaCardObserver) areaCardObserver.disconnect();
    const visibleAreas = areas.filter((area) => {
        const matchesGroup = activeGroup === 'all' || area.group === activeGroup;
        return matchesGroup;
    });
    areasEmpty.hidden = visibleAreas.length > 0;
    const groupSections = groups.map((group, groupIndex) => {
        const groupAreas = visibleAreas.filter((area) => area.group === group.id);
        if (!groupAreas.length) return null;

        const section = document.createElement('section');
        section.className = 'areas-card-group';
        section.dataset.group = group.id;
        const heading = document.createElement('div');
        heading.className = 'areas-card-group-heading';
        const headingLabel = document.createElement('span');
        headingLabel.className = 'guide-step-number';
        headingLabel.textContent = `${String(groupIndex + 1).padStart(2, '0')} / ${group.label}`;
        heading.append(headingLabel);

        const grid = document.createElement('div');
        grid.className = 'areas-card-grid';
        groupAreas.forEach((area, cardIndex) => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'areas-card areas-card-reveal';
            card.dataset.roleId = area.id;
            card.dataset.group = area.group;
            card.style.setProperty('--reveal-delay', `${(cardIndex % 3) * 90}ms`);
            card.setAttribute('aria-haspopup', 'dialog');

            const meta = document.createElement('span');
            meta.className = 'areas-card-meta';
            meta.textContent = `${area.number} / ${cardGroupLabels[area.group]}`;
            const icon = document.createElement('span');
            icon.className = 'areas-card-icon';
            icon.setAttribute('aria-hidden', 'true');
            icon.textContent = area.icon;
            const title = document.createElement('span');
            title.className = 'areas-card-title';
            title.textContent = area.title;
            const summary = document.createElement('span');
            summary.className = 'areas-card-summary';
            summary.textContent = area.summary;
            const divider = document.createElement('span');
            divider.className = 'areas-card-divider';
            const fitLabel = document.createElement('span');
            fitLabel.className = 'areas-card-fit-label';
            fitLabel.textContent = 'HABILIDADES QUE SUMAN';
            const tags = document.createElement('span');
            tags.className = 'areas-card-tags';
            area.skills.forEach((skill) => {
                const tag = document.createElement('span');
                tag.textContent = skill;
                tags.appendChild(tag);
            });
            const link = document.createElement('span');
            link.className = 'areas-card-link';
            link.append('Ver tareas y cómo empezar');
            const arrow = document.createElement('span');
            arrow.className = 'areas-card-arrow';
            arrow.setAttribute('aria-hidden', 'true');
            arrow.textContent = '↗';
            link.appendChild(arrow);
            card.append(meta, icon, title, summary, divider, fitLabel, tags, link);
            grid.appendChild(card);
        });
        section.append(heading, grid);
        return section;
    }).filter(Boolean);
    areasGrid.replaceChildren(...groupSections);
    const renderedCards = areasGrid.querySelectorAll('.areas-card');
    renderedCards.forEach((card) => {
        if (areaCardObserver) areaCardObserver.observe(card);
        else card.classList.add('is-visible');
    });
}

const areaDialogTones = {
    crear: '#caff19',
    construir: '#9878ff',
    conectar: '#ff3cac',
    jugar: '#7040ff'
};

function openArea(areaId) {
    const area = areas.find((item) => item.id === areaId);
    if (!area) return;
    areaDialog.dataset.group = area.group;
    areaDialog.style.setProperty('--dialog-tone', areaDialogTones[area.group]);
    areaDialogBody.replaceChildren();
    const header = document.createElement('header');
    const label = document.createElement('span');
    label.className = 'guide-step-number';
    label.textContent = `${area.number} / ${groupLabels[area.group]}`;
    const title = document.createElement('h2');
    title.id = 'area-dialog-title';
    title.textContent = area.title;
    const intro = document.createElement('p');
    intro.className = 'areas-dialog-intro';
    intro.textContent = area.what;
    header.append(label, title, intro);
    areaDialogBody.appendChild(header);

    const sections = [
        ['¿Qué tareas podrías hacer?', area.tasks],
        ['Habilidades que suman', area.skills],
        ['Quizás te interese si...', area.fits],
        ['Una forma de empezar', area.start],
        ['Suele colaborar con', area.teams]
    ];
    const sectionGrid = document.createElement('div');
    sectionGrid.className = 'areas-dialog-grid';
    sections.forEach(([headingText, content]) => {
        const section = document.createElement('section');
        const heading = document.createElement('h3');
        heading.textContent = headingText;
        section.appendChild(heading);
        if (Array.isArray(content)) {
            const list = document.createElement('ul');
            content.forEach((text) => {
                const item = document.createElement('li');
                item.textContent = text;
                list.appendChild(item);
            });
            section.appendChild(list);
        } else {
            const paragraph = document.createElement('p');
            paragraph.textContent = content;
            section.appendChild(paragraph);
        }
        sectionGrid.appendChild(section);
    });
    areaDialogBody.appendChild(sectionGrid);
    areaDialog.showModal();
}

document.addEventListener('click', (event) => {
    const card = event.target.closest('[data-role-id]');
    if (card) openArea(card.dataset.roleId);
});

mapButtons.forEach((button) => {
    const orb = button.querySelector('.areas-map-art-center');
    orb.addEventListener('animationend', (event) => {
        if (event.animationName === 'areas-orb-select' || event.animationName === 'areas-map-orb-response') {
            button.classList.remove('is-activating');
        }
    });

    button.addEventListener('click', () => {
        button.classList.remove('is-activating');
        void button.offsetWidth;
        button.classList.add('is-activating');

        if (button.getAttribute('aria-pressed') === 'true') {
            activeGroup = 'all';
            mapButtons.forEach((item) => {
                item.setAttribute('aria-pressed', 'false');
                item.setAttribute('aria-expanded', 'false');
            });
            selectedGroupPanel.hidden = true;
            areasExplorer.hidden = true;
            delete selectedGroupPanel.dataset.group;
            delete areasExplorer.dataset.group;
            delete areasMap.dataset.group;
            return;
        }

        activeGroup = button.dataset.mapGroup;
        areasMap.dataset.group = activeGroup;
        const selectedGroup = groups.find((group) => group.id === activeGroup);
        const selectedGroupIndex = groups.indexOf(selectedGroup);
        mapButtons.forEach((item) => {
            const selected = item === button;
            item.setAttribute('aria-pressed', String(selected));
            item.setAttribute('aria-expanded', String(selected));
        });
        selectedGroupTitle.textContent = selectedGroup.label;
        selectedGroupDescription.textContent = selectedGroup.description;
        selectedGroupDisciplines.textContent = selectedGroup.areas;
        selectedGroupCount.textContent = selectedGroup.count.replace(/^0/, '');
        selectedGroupPanel.dataset.group = activeGroup;
        areasExplorer.dataset.group = activeGroup;
        selectedGroupPanel.hidden = false;
        areasExplorer.hidden = false;
        renderAreas();
    });
});

document.querySelector('.areas-dialog-close').addEventListener('click', () => areaDialog.close());
areaDialog.addEventListener('click', (event) => {
    if (event.target === areaDialog) areaDialog.close();
});

renderAreas();
