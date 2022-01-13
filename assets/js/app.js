const hamburgerMenu = document.querySelector('.hamburger-menu')
const hamburgerMenuActiveToggle = document.querySelector('.active')

const navListActiveToggle = document.querySelector('.nav-list-active')
const navList = document.querySelector('.nav-list')

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active')

  navList.classList.toggle('nav-list-active')
})