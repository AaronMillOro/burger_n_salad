import './style.css'
import Logo from './assets/img/cutlery.png'

import { showAbout, showIndex } from './about.js'
import { showMenu } from './menu.js'
import { showContact } from './contact.js'

const header = document.querySelector('header')
const content = document.getElementById('content')

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
    })
    nav.appendChild(about)
    nav.appendChild(menu)
    nav.appendChild(contact)
    return nav
}

header.appendChild(displayLogo()) 
header.appendChild(showNavContent())
content.appendChild(showIndex())