document.addEventListener('click', function (e) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var guideQuizLink = e.target.closest('.guide-cta .main-button');
    if (!e.target.closest('button, a, summary, [role="button"], .category, .explore-option, .tama3d canvas')) return;
    var glyphs = ['✦', '✧', '⋆', '✩', '✭'];
    for (var i = 0; i < 12; i++) {
        var s = document.createElement('span');
        var angle = Math.random() * Math.PI * 2;
        var dist = guideQuizLink ? 28 + Math.random() * 38 : 40 + Math.random() * 60;
        s.className = guideQuizLink ? 'sparkle guide-cta-sparkle' : 'sparkle';
        s.textContent = glyphs[i % glyphs.length];
        s.style.left = e.clientX + 'px';
        s.style.top = e.clientY + 'px';
        s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
        s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
        s.style.color = i % 2 ? '#caff19' : '#9878ff';
        (guideQuizLink ? document.documentElement : document.body).appendChild(s);
        setTimeout(s.remove.bind(s), 700);
    }
    var link = e.target.closest('a.main-button, a.explore-option');
    var href = link && link.getAttribute('href');
    if (link && !guideQuizLink && href && href.charAt(0) !== '#' && link.target !== '_blank' &&
        !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.defaultPrevented) {
        e.preventDefault();
        setTimeout(function () { window.location.href = link.href; }, 450);
    }
});