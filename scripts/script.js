// Burgermenu function
burgermenu = document.querySelector('.burgermenu')
navbar = document.querySelector('.nav-bar')
burgermenuI = document.querySelector('.burgermenu i')
header = document.querySelector('header')

burgermenu.onclick = function () {
    navbar.classList.toggle('active');
    const isOpen = navbar.classList.contains('active');

    burgermenuI.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}


function reveal() {
    let text = document.querySelector('scroll-reveal')
    for (var i = 0; i < text.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = text[i].getBoundingClientRect().top;
        let elementVisible = 300;

        if (elementTop < windowHeight - elementVisible) {
            text[i].classList.add('reveal')
        }
        else {
            text[i].classList.remove('reveal')
        }
    }
}
