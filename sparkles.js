document.addEventListener('click', function (e) {
    if (!e.target.closest('button, a, summary, [role="button"], .category, .explore-option')) return;
    var glyphs = ['✦', '✧', '⋆', '✩', '✭'];
    for (var i = 0; i < 12; i++) {
        var s = document.createElement('span');
        var angle = Math.random() * Math.PI * 2;
        var dist = 40 + Math.random() * 60;
        s.className = 'sparkle';
        s.textContent = glyphs[i % glyphs.length];
        s.style.left = e.clientX + 'px';
        s.style.top = e.clientY + 'px';
        s.style.setProperty('--dx', Math.cos(angle) * dist + 'px');
        s.style.setProperty('--dy', Math.sin(angle) * dist + 'px');
        s.style.color = i % 2 ? '#caff19' : '#9878ff';
        document.body.appendChild(s);
        setTimeout(s.remove.bind(s), 700);
    }
    var link = e.target.closest('a.main-button, a.explore-option');
    var href = link && link.getAttribute('href');
    if (link && href && href.charAt(0) !== '#' && link.target !== '_blank' &&
        !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.defaultPrevented) {
        e.preventDefault();
        setTimeout(function () { window.location.href = link.href; }, 450);
    }
});