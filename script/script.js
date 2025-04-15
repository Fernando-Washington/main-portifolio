function clickMenu() {
    var menuLinks = document.getElementById('menuLinks');
    if (menuLinks.style.display == 'none') {
        menuLinks.style.display = 'block';
    } else {
        menuLinks.style.display = 'none';
    }
}

function notFound() {
    alert('Não encontrado')
}