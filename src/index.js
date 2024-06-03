import './style.css'
import Logo from './assets/img/cutlery.png'

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
    about.classList.add('btn')
    about.classList.add('about')
    menu.classList.add('btn')
    menu.classList.add('menu')
    contact.classList.add('btn')
    contact.classList.add('contact')
    nav.appendChild(about)
    nav.appendChild(menu)
    nav.appendChild(contact)
    return nav
}

header.appendChild(displayLogo())    
header.appendChild(showNavContent())    

