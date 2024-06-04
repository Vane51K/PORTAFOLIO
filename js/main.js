document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los botones por sus IDs
    const instagramButton = document.getElementById('instagramButton');
    const gitButton = document.getElementById('GitButton');

    // Agregar eventos de clic a los botones
    instagramButton.addEventListener('click', function() {
        // Redirigir al usuario a tu perfil de Instagram
        window.location.href = 'https://www.instagram.com/keylie_sanchez._/';
    });

    gitButton.addEventListener('click', function() {
        // Redirigir al usuario a tu perfil de GitHub
        window.location.href = 'https://github.com/Vane51K';
    });
});
document.getElementById('copyButton').addEventListener('click', function() {
    const email = 'keyliesanchez19@gmail.com';
    navigator.clipboard.writeText(email).then(function() {
        const tooltip = document.querySelector('.tooltip');
        tooltip.classList.add('active');
        setTimeout(function() {
            tooltip.classList.remove('active');
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});

