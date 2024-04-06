window.onload = principal;

function principal()
{
    iniciarCarrusel();
}

function iniciarCarrusel() {
    let slideIndex = 0;
    let slides = document.getElementsByClassName('slide');

    // Ocultar todos los slides excepto el primero
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Función para mostrar el próximo slide
    function mostrarSiguienteSlide() {
        slides[slideIndex].style.display = "none";
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "flex";
    }

    // Iniciar el carrusel automáticamente
    setInterval(mostrarSiguienteSlide, 2500);
}