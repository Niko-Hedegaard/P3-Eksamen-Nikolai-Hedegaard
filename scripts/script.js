// Burgermenu function
burgermenu = document.querySelector('.burgermenu')
navbar = document.querySelector('.nav-bar')
burgermenuI = document.querySelector('.burgermenu i')

burgermenu.onclick = function () {
    navbar.classList.toggle('active');
    const isOpen = navbar.classList.contains('active');

    burgermenuI.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
