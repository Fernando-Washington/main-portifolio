function menu_hamburguer(){
    document.getElementById('menu').onclick = function() {
        const content = document.getElementById('content');
        if (content.style.display === 'none') {
            content.style.display = 'block'; // Mostra o elemento
        } else {
            content.style.display = 'none';  // Esconde o elemento
        }
    };
}