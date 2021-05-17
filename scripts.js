
 let menu = document.querySelector('nav > ul')
 let button = document.querySelector('nav > button')
 let mq = window.matchMedia( "(max-width: 920px)" );
 let showMenu = false
 if (mq.matches) {
   button.addEventListener('click', () => {
     showMenu = !showMenu
     menu.style.display = showMenu ? 'block' : 'none'
     button.classList.toggle('opened', showMenu)
   })
   menu.addEventListener('click', () => {
     showMenu = false
     console.log(showMenu)
     menu.style.display = 'none'
     button.classList.toggle('opened', showMenu)
   })

 }