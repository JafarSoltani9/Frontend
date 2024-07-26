const nav = document.querySelector('.navigation')
const menu = document.querySelector('.menu-toggle')

menu.onclick = function () {
    nav.classList.toggle('open')
}