const nav = document.querySelector('.navigation')
const menu = document.querySelector('.menu-toggle')

menu.onclick = function () {
    nav.classList.toggle('open')
}

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item) => {
        item.classList.remove('active')
    });
    this.classList.add('active')
}

list.forEach((item) => {
    item.addEventListener('click', activeLink)
})