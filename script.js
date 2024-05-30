const switchTheme = document.getElementById('switchTheme');
const title = document.querySelector('h1');

// Añadir un evento de cambio al interruptor
switchTheme.addEventListener('change', () => {
    // Obtener el ícono dentro del contenedor
    const icon = document.querySelector('.container h1 i');
    //
    if (switchTheme.checked) {
        // Cambiar el texto a "Dark Mode"
        title.textContent = 'Dark Mode';
        // Cambiar el ícono a la luna
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');
    } else {
        // Cambiar el texto a "Light Mode"
        title.textContent = 'Light Mode';
        // Cambiar el ícono al sol
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high');
    }
    // Alternar la clase 'dark-theme' en el cuerpo del documento
    document.body.classList.toggle('dark-theme');
});

