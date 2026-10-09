const areas = [
    {
        id: 'diseno', group: 'crear', number: '01', icon: '◈', title: 'Diseño de juego',
        summary: 'Define las reglas, los retos y el ritmo de cada partida.',
        what: 'Diseñar es decidir cómo se juega: qué puede hacer cada persona, qué desafíos encuentra y cómo evoluciona la experiencia.',
        tasks: ['Crear mecánicas y reglas.', 'Diseñar niveles, objetivos y progresión.', 'Probar ideas y ajustar el equilibrio.'],
        fits: 'Te gusta inventar sistemas, resolver problemas y pensar qué hace que una experiencia sea interesante.',
        start: 'Diseñá un juego de cartas sencillo o cambiá las reglas de uno que ya conozcas. Probalo con otras personas y anotá qué funciona.',
        teams: ['Arte y animación', 'Programación', 'UX y accesibilidad'], interests: ['crear', 'resolver', 'historias', 'equipo']
    },
    {
        id: 'arte', group: 'crear', number: '02', icon: '✧', title: 'Arte y animación',
        summary: 'Da forma a personajes, escenarios, objetos y movimiento.',
        what: 'El área visual construye la identidad del juego y convierte conceptos en imágenes que se pueden explorar e interpretar.',
        tasks: ['Explorar ideas visuales y referencias.', 'Crear arte 2D, modelos 3D, texturas o escenarios.', 'Preparar personajes y objetos para animación.'],
        fits: 'Disfrutás dibujar, observar detalles, combinar referencias o imaginar cómo se vería un mundo.',
        start: 'Rediseñá un objeto cotidiano como si perteneciera a un juego y armá una hoja con sus formas, colores y usos.',
        teams: ['Diseño de juego', 'Animación', 'Programación', 'Narrativa'], interests: ['crear', 'historias']
    },
    {
        id: 'narrativa', group: 'crear', number: '03', icon: '✎', title: 'Narrativa y escritura',
        summary: 'Crea personajes, diálogos y mundos con historias propias.',
        what: 'La narrativa diseña cómo aparecen las historias dentro del juego: quiénes las cuentan, qué decisiones las cambian y cómo se relacionan con lo que se juega.',
        tasks: ['Escribir diálogos, escenas y trasfondos.', 'Diseñar historias ramificadas.', 'Coordinar textos con niveles y mecánicas.'],
        fits: 'Te gusta escribir, imaginar personajes, construir mundos o encontrar distintas formas de contar algo.',
        start: 'Escribí una escena breve con dos decisiones que lleven a resultados diferentes.',
        teams: ['Diseño de juego', 'Arte', 'Audio', 'Localización'], interests: ['crear', 'historias', 'equipo']
    },
    {
        id: 'musica', group: 'crear', number: '04', icon: '♫', title: 'Composición musical',
        summary: 'Compone música que acompaña el tono y el ritmo del juego.',
        what: 'La música ayuda a construir atmósferas y acompaña momentos, espacios y cambios de la experiencia.',
        tasks: ['Componer temas y variaciones.', 'Adaptar la música a distintas situaciones.', 'Preparar piezas para su implementación.'],
        fits: 'Te interesa crear música, experimentar con sonidos o acompañar emociones con ritmo y melodía.',
        start: 'Creá una pieza corta para dos momentos distintos de un mismo nivel: calma y tensión.',
        teams: ['Diseño de sonido', 'Narrativa', 'Diseño de juego', 'Programación'], interests: ['crear', 'historias']
    },
    {
        id: 'audio-narrativa', group: 'crear', number: '05', icon: '◖', title: 'Diseño de sonido',
        summary: 'Construye sonidos y ambientes que responden a lo que pasa.',
        what: 'El diseño de sonido crea e integra efectos, ambientes y voces para que el mundo del juego se sienta vivo y legible.',
        tasks: ['Grabar o crear efectos sonoros.', 'Editar voces y ambientes.', 'Integrar sonidos que reaccionan a las acciones.'],
        fits: 'Te gusta escuchar con atención, grabar, editar audio o descubrir cómo un sonido cambia una escena.',
        start: 'Grabá sonidos cotidianos y transformalos en tres efectos para un personaje o escenario.',
        teams: ['Composición musical', 'Programación', 'Diseño de juego', 'Narrativa'], interests: ['crear', 'resolver', 'historias']
    },
    {
        id: 'programacion', group: 'construir', number: '06', icon: '⌘', title: 'Programación',
        summary: 'Convierte ideas y diseños en sistemas que funcionan.',
        what: 'El desarrollo implementa mecánicas y herramientas, conecta los sistemas del juego y los adapta a distintas plataformas.',
        tasks: ['Programar controles y comportamiento.', 'Conectar sistemas y herramientas.', 'Encontrar errores y optimizar rendimiento.'],
        fits: 'Te interesa entender cómo funcionan las cosas, resolver problemas o construir herramientas.',
        start: 'Probá modificar un proyecto guiado o programar una interacción pequeña en una herramienta para principiantes.',
        teams: ['Diseño de juego', 'Arte', 'UX', 'Calidad'], interests: ['resolver', 'equipo']
    },
    {
        id: 'ux', group: 'construir', number: '07', icon: '◎', title: 'UX y accesibilidad',
        summary: 'Hace que jugar sea claro, cómodo y accesible.',
        what: 'UX observa cómo se entiende y se usa el juego. La interfaz y la accesibilidad ayudan a que más personas puedan jugar a su manera.',
        tasks: ['Diseñar menús e información en pantalla.', 'Probar flujos y detectar confusiones.', 'Proponer opciones de acceso y personalización.'],
        fits: 'Te interesa escuchar a otras personas, ordenar información y resolver barreras de uso.',
        start: 'Revisá un menú que uses y anotá tres cambios que podrían hacerlo más claro o accesible.',
        teams: ['Diseño de juego', 'Programación', 'Calidad', 'Arte'], interests: ['resolver', 'equipo']
    },
    {
        id: 'calidad', group: 'construir', number: '08', icon: '⌕', title: 'Calidad y testing',
        summary: 'Prueba el juego y ayuda a detectar qué puede mejorar.',
        what: 'QA verifica versiones, documenta problemas de forma clara y comprueba que los cambios solucionen lo detectado.',
        tasks: ['Probar escenarios y dispositivos.', 'Registrar pasos para reproducir errores.', 'Volver a probar las correcciones.'],
        fits: 'Tenés curiosidad, paciencia y atención al detalle; te gusta descubrir por qué algo no salió como esperabas.',
        start: 'Probá un juego que conozcas con una lista de casos y describí un error de forma reproducible.',
        teams: ['Programación', 'Diseño de juego', 'UX', 'Localización'], interests: ['resolver']
    },
    {
        id: 'datos', group: 'construir', number: '09', icon: '▦', title: 'Datos y analítica',
        summary: 'Usa datos para entender patrones y tomar decisiones.',
        what: 'El análisis de datos ayuda a interpretar cómo se juega, encontrar tendencias y evaluar cambios sin reemplazar la observación cualitativa.',
        tasks: ['Organizar y revisar datos.', 'Buscar patrones de uso y progreso.', 'Comunicar hallazgos al equipo.'],
        fits: 'Te gusta buscar patrones, trabajar con números y explicar qué podrían significar.',
        start: 'Registrá resultados de varias partidas en una tabla y buscá un patrón que responda una pregunta concreta.',
        teams: ['Diseño de juego', 'Producción', 'UX', 'Marketing'], interests: ['resolver']
    },
    {
        id: 'produccion', group: 'conectar', number: '10', icon: '◷', title: 'Producción',
        summary: 'Coordina tiempos, prioridades y comunicación entre áreas.',
        what: 'Producción facilita el trabajo del equipo y ayuda a que los proyectos avancen con acuerdos claros y expectativas realistas.',
        tasks: ['Organizar etapas y prioridades.', 'Acompañar la comunicación del equipo.', 'Identificar riesgos y dependencias.'],
        fits: 'Te interesa organizar proyectos, facilitar acuerdos y ayudar a que un grupo trabaje en conjunto.',
        start: 'Organizá una actividad pequeña con otras personas, definí tareas y revisá cómo podrían coordinarse mejor.',
        teams: ['Todas las áreas'], interests: ['equipo', 'resolver']
    },
    {
        id: 'comunidad', group: 'conectar', number: '11', icon: '◌', title: 'Comunidad',
        summary: 'Escucha y acompaña a quienes juegan.',
        what: 'El trabajo de comunidad crea espacios de conversación, comparte información y ayuda a que el equipo comprenda a su público.',
        tasks: ['Moderar y cuidar espacios.', 'Escuchar preguntas y comentarios.', 'Compartir novedades y acercar respuestas.'],
        fits: 'Te gusta conversar, escuchar distintos puntos de vista y construir espacios de pertenencia.',
        start: 'Pensá reglas breves para una comunidad segura y cómo responderías a una consulta frecuente.',
        teams: ['Marketing', 'Producción', 'Narrativa', 'Esports'], interests: ['equipo', 'historias']
    },
    {
        id: 'marketing', group: 'conectar', number: '12', icon: '↗', title: 'Marketing y comunicación',
        summary: 'Cuenta qué hace especial al juego y conecta con su público.',
        what: 'Marketing y comunicación definen cómo presentar un proyecto, a quién puede interesarle y qué información necesita conocer.',
        tasks: ['Preparar mensajes y contenidos.', 'Planificar campañas y materiales.', 'Coordinar anuncios con el equipo.'],
        fits: 'Te interesa comunicar ideas, crear contenidos o pensar cómo llegar a distintas audiencias.',
        start: 'Prepará una presentación breve de un juego que te guste para alguien que todavía no lo conoce.',
        teams: ['Comunidad', 'Producción', 'Arte', 'Publishing'], interests: ['crear', 'equipo', 'historias']
    },
    {
        id: 'traduccion', group: 'conectar', number: '13', icon: '文', title: 'Traducción y localización',
        summary: 'Adapta textos y experiencias a otros idiomas y contextos.',
        what: 'La localización adapta textos, referencias, formatos y elementos de interfaz para que el juego funcione en distintos lugares.',
        tasks: ['Traducir diálogos e interfaz.', 'Revisar tono y consistencia.', 'Probar textos dentro del juego.'],
        fits: 'Te gustan los idiomas, los matices culturales y encontrar la forma más clara de expresar una idea.',
        start: 'Compará dos versiones de un mismo texto de juego y anotá qué cambia en tono, humor o claridad.',
        teams: ['Narrativa', 'Calidad', 'Marketing', 'Producción'], interests: ['historias', 'equipo']
    },
    {
        id: 'esports', group: 'jugar', number: '14', icon: '⌁', title: 'Esports y competición',
        summary: 'Organiza y desarrolla experiencias competitivas alrededor de los juegos.',
        what: 'El ecosistema competitivo incluye torneos, equipos, producción de eventos, análisis, comunicación y apoyo a quienes compiten.',
        tasks: ['Coordinar torneos y calendarios.', 'Analizar partidas y estrategias.', 'Producir transmisiones y eventos.'],
        fits: 'Te entusiasman la estrategia, los eventos en vivo, el trabajo en equipo o el análisis de partidas.',
        start: 'Organizá una partida amistosa con reglas claras y observá qué hace que la experiencia sea justa y disfrutable.',
        teams: ['Comunidad', 'Producción', 'Marketing', 'Diseño de juego'], interests: ['competir', 'equipo']
    }
];

const groups = [
    { id: 'crear', label: 'IMAGINAR Y CREAR', icon: '✧', areas: 'Diseño · Arte · Narrativa · Música · Sonido', count: '05 ÁREAS' },
    { id: 'construir', label: 'CONSTRUIR Y MEJORAR', icon: '⌘', areas: 'Programación · UX · Calidad · Datos', count: '04 ÁREAS' },
    { id: 'conectar', label: 'ORGANIZAR Y CONECTAR', icon: '◌', areas: 'Producción · Comunidad · Marketing · Localización', count: '04 ÁREAS' },
    { id: 'jugar', label: 'JUGAR Y COMPETIR', icon: '⌁', areas: 'Esports · Torneos · Eventos', count: '01 ÁREA' }
];

const advisorAnswers = {
    q1: {
        crear: ['diseno', 'arte', 'narrativa', 'musica', 'audio-narrativa'],
        resolver: ['programacion', 'ux', 'calidad', 'datos'],
        historias: ['narrativa', 'musica', 'audio-narrativa', 'comunidad', 'traduccion'],
        organizar: ['produccion', 'comunidad', 'marketing', 'traduccion'],
        competir: ['esports', 'comunidad', 'marketing']
    },
    q2: {
        visual: ['arte', 'diseno', 'ux'],
        sistemas: ['programacion', 'datos', 'calidad', 'diseno'],
        palabras: ['narrativa', 'traduccion', 'marketing', 'comunidad'],
        personas: ['produccion', 'comunidad', 'marketing', 'esports']
    },
    q3: {
        detalle: ['calidad', 'datos', 'traduccion', 'ux'],
        construir: ['programacion', 'arte', 'audio-narrativa', 'musica', 'diseno'],
        coordinar: ['produccion', 'marketing', 'comunidad', 'traduccion'],
        competir: ['esports', 'comunidad']
    }
};

const groupLabels = Object.fromEntries(groups.map((group) => [group.id, group.label]));
const areasGrid = document.querySelector('#areas-grid');
const areasCount = document.querySelector('#areas-count');
const areasEmpty = document.querySelector('#areas-empty');
const mapButtons = document.querySelectorAll('[data-map-group]');
const interestButtons = document.querySelectorAll('[data-interest-filter]');
const areaDialog = document.querySelector('#area-dialog');
const areaDialogBody = document.querySelector('#area-dialog-body');
const advisorForm = document.querySelector('#areas-advisor-form');
const advisorResults = document.querySelector('#areas-advisor-results');
const recommendations = document.querySelector('#areas-advisor-recommendations');
let activeGroup = 'all';
let activeInterest = 'all';

function renderAreas() {
    const visibleAreas = areas.filter((area) => {
        const matchesGroup = activeGroup === 'all' || area.group === activeGroup;
        const matchesInterest = activeInterest === 'all' || area.interests.includes(activeInterest);
        return matchesGroup && matchesInterest;
    });
    areasCount.textContent = `${visibleAreas.length} ${visibleAreas.length === 1 ? 'área' : 'áreas'}`;
    areasEmpty.hidden = visibleAreas.length > 0;
    areasGrid.replaceChildren(...visibleAreas.map((area) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'areas-card';
        card.dataset.roleId = area.id;
        card.dataset.group = area.group;
        card.setAttribute('aria-haspopup', 'dialog');
        card.innerHTML = `<span class="areas-card-symbol" aria-hidden="true">${area.icon}</span><span class="areas-card-meta">${area.number} / ${groupLabels[area.group]}</span><h3>${area.title}</h3><p>${area.summary}</p><span class="areas-card-link">EXPLORAR ÁREA <span aria-hidden="true">↗</span></span>`;
        return card;
    }));
}

function openArea(areaId) {
    const area = areas.find((item) => item.id === areaId);
    if (!area) return;
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
    button.addEventListener('click', () => {
        activeGroup = button.dataset.mapGroup;
        activeInterest = 'all';
        mapButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        interestButtons.forEach((item) => item.setAttribute('aria-pressed', String(item.dataset.interestFilter === 'all')));
        renderAreas();
        document.querySelector('#areas-explorer').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

interestButtons.forEach((button) => {
    button.addEventListener('click', () => {
        activeInterest = button.dataset.interestFilter;
        activeGroup = 'all';
        interestButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        mapButtons.forEach((item) => item.setAttribute('aria-pressed', 'false'));
        renderAreas();
    });
});

document.querySelector('.areas-dialog-close').addEventListener('click', () => areaDialog.close());
areaDialog.addEventListener('click', (event) => {
    if (event.target === areaDialog) areaDialog.close();
});

advisorForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const answers = new FormData(advisorForm);
    const scores = new Map(areas.map((area) => [area.id, 0]));
    ['q1', 'q2', 'q3'].forEach((question) => {
        (advisorAnswers[question][answers.get(question)] || []).forEach((id) => scores.set(id, scores.get(id) + 1));
    });
    const results = [...areas].sort((a, b) => scores.get(b.id) - scores.get(a.id)).slice(0, 3);
    recommendations.replaceChildren(...results.map((area) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'areas-recommendation';
        button.dataset.roleId = area.id;
        button.innerHTML = `<span aria-hidden="true">${area.icon}</span><strong>${area.title}</strong><span aria-hidden="true">↗</span>`;
        return button;
    }));
    advisorResults.hidden = false;
    advisorResults.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

renderAreas();
