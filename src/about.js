import Burger from './assets/img/food-photographer-E94j3rMcxlw-unsplash.jpg'
import Salad from './assets/img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'

const burgerImage = () => {
    const burger = new Image()
    burger.src = Burger
    burger.setAttribute('alt', 'main-burger')
    burger.classList.add('main-food')
    return burger
}

const saladImage = () => {
    const salad = new Image()
    salad.src = Salad
    salad.setAttribute('alt', 'main-salad')
    salad.classList.add('main-food')
    return salad
}

const showAbout = () => {
    const aboutSection = showIndex()
    const contentSection = document.createElement('section')
    contentSection.classList.add('info')
    const info = document.createElement('p')
    contentSection.appendChild(burgerImage())
    info.innerText = `
    Grab some burgers and salads. It's totally okay to indulge in some comfort food (miam burgers). But don't forget to balance it out with some healthy options like salad. And don't forget about the little joys in life, like ponies or sweets. 
    `
    contentSection.appendChild(info)
    contentSection.appendChild(saladImage())
    aboutSection.appendChild(contentSection)
    return aboutSection
}

const showIndex = () => { 
    const aboutSection = document.createElement('section')
    const title = document.createElement('h1')
    title.innerText = 'Burgers N Salads'
    aboutSection.appendChild(title)
    return aboutSection
}

export {
    showAbout, 
    showIndex
}