document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById('fullscreen-nav');

    // Apri il menu
    document.querySelector('.menu-icon').addEventListener('click', function() {
        menu.style.display = 'block';
        setTimeout(function() {
            menu.style.top = '0';
        }, 10);
    });

    // Chiudi il menu
    menu.addEventListener('click', function() {
        menu.style.top = '-100%';
        setTimeout(function() {
            menu.style.display = 'none';
        }, 500);
    });
});
