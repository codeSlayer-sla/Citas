// Selecciona el logo
var logo = document.getElementById('logo');

// Variables para almacenar la posición inicial del logo y las coordenadas iniciales del mouse
var initialLogoX, initialLogoY, initialMouseX, initialMouseY;

// Variable para verificar si se está arrastrando
var dragging = false;

// Función para iniciar el arrastre
function startDrag(e) {
    // Guarda las coordenadas iniciales del mouse
    initialMouseX = e.clientX;
    initialMouseY = e.clientY;

    // Guarda las coordenadas iniciales del logo
    initialLogoX = logo.offsetLeft;
    initialLogoY = logo.offsetTop;

    // Marca que se está arrastrando
    dragging = true;

    // Cancela el evento de selección del texto
    e.preventDefault();
}

// Función para arrastrar el logo
function drag(e) {
    if (dragging) {
        // Calcula la diferencia entre la posición actual del mouse y la posición inicial del mouse
        var deltaX = e.clientX - initialMouseX;
        var deltaY = e.clientY - initialMouseY;

        // Calcula la nueva posición del logo
        var newLogoX = initialLogoX + deltaX;
        var newLogoY = initialLogoY + deltaY;

        // Establece la nueva posición del logo
        logo.style.left = newLogoX + 'px';
        logo.style.top = newLogoY + 'px';
    }
}

// Función para detener el arrastre
function stopDrag() {
    // Marca que se ha detenido el arrastre
    dragging = false;
}

// Agrega eventos de clic para iniciar y detener el arrastre
logo.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);
