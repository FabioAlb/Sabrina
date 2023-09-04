const botao = document.querySelector('.btn-fixed');
window.addEventListener('scroll', function (event) {
    if (this.window.scrollY == 0) {
        botao.classList.remove('visible')
    } else {
        botao.classList.add('visible')
    }
})
function startnav() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    } else{
        menuMobile.classList.add('open');
    }
}