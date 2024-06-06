import './style.css'
import Logo from './assets/img/cutlery.png'

import { showAbout, showIndex } from './about.js'
import { showMenu } from './menu.js'
import { showContact } from './contact.js'
import { showMap } from './leafletMap.js'

const header = document.querySelector('header')
const content = document.getElementById('content')
const footer = document.createElement('footer')

function displayLogo(){
    const logo = new Image()
    logo.src = Logo
    logo.setAttribute('alt', 'logo')
    logo.setAttribute('id', 'logo')
    return logo
}

function showNavContent() {
    const nav = document.querySelector('nav')
    const about = document.createElement('button')
    const menu = document.createElement('button')
    const contact = document.createElement('button')
    about.innerText = 'About'
    menu.innerText = 'Menu'
    contact.innerText = 'Contact'
    about.classList.add('btn', 'about')
    menu.classList.add('btn', 'menu')
    contact.classList.add('btn', 'contact')
    about.addEventListener('click', () => {
        content.innerHTML = ''
        content.appendChild(showAbout())
    })
    menu.addEventListener('click', () => {
        content.innerHTML = ''
        content.appendChild(showMenu())
    })
    contact.addEventListener('click', () => {
        content.innerHTML = ''
        content.appendChild(showContact())
        showMap()
    })
    nav.appendChild(about)
    nav.appendChild(menu)
    nav.appendChild(contact)
    return nav
}

footer.innerHTML = `A creation of <a href="https://aaronmillan.xyz" target="_blank"> AMO </a>`

header.appendChild(displayLogo()) 
header.appendChild(showNavContent())
content.appendChild(showIndex())
document.body.appendChild(footer)