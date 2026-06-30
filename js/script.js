(function () {
    'use strict';

    document.documentElement.classList.add('js-enabled');

    var prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
    ).matches;

    // Atualiza o ano no rodapé (com fallback no HTML caso o script falhe)
    var anoEl = document.getElementById('ano');
    if (anoEl) {
        anoEl.textContent = new Date().getFullYear();
    }

    // Animação da linha de prancheta (respeitando acessibilidade)
    var linePath = document.getElementById('hero-line-path');
    if (linePath) {
        var length = linePath.getTotalLength();
        linePath.style.strokeDasharray = length;

        if (prefersReducedMotion) {
            linePath.style.strokeDashoffset = '0';
        } else {
            linePath.style.strokeDashoffset = length;
            linePath.style.transition = 'stroke-dashoffset 1.1s ease';
            requestAnimationFrame(function () {
                requestAnimationFrame(function () {
                    linePath.style.strokeDashoffset = '0';
                });
            });
        }
    }

    // Revelação de seções on-scroll
    var revealEls = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
        revealEls.forEach(function (el) {
            el.classList.add('is-visible');
        });
        return;
    }

    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
        observer.observe(el);
    });
})();