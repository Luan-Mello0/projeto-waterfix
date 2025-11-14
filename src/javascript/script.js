const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links')
const icon = document.querySelector('.btn-mobile i')

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});


document.addEventListener('DOMContentLoaded', () => {

    const imgPrincipal = document.getElementById('imgPrincipal');
    const miniaturas = document.querySelectorAll('.miniatura-img');

    if (imgPrincipal && miniaturas.length > 0) {
        miniaturas.forEach(miniatura => {
            miniatura.addEventListener('click', () => {

                miniaturas.forEach(m => m.classList.remove('active'));

                miniatura.classList.add('active');

                const novaSrc = miniatura.getAttribute('data-src');

                imgPrincipal.src = novaSrc;
            });
        });
    }

    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    if (imgPrincipal && lightboxOverlay && lightboxImage && lightboxClose) {

        imgPrincipal.addEventListener('click', () => {
            const imgSrc = imgPrincipal.getAttribute('src');

            lightboxImage.setAttribute('src', imgSrc);

            lightboxOverlay.classList.add('show');
        });

        lightboxClose.addEventListener('click', () => {
            lightboxOverlay.classList.remove('show');
        });

        lightboxOverlay.addEventListener('click', (evento) => {
            if (evento.target === lightboxOverlay) {
                lightboxOverlay.classList.remove('show');
            }
        });
    }

});