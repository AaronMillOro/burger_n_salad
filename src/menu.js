import Cheese from './assets/img/aliona-gumeniuk-jeAjT87nbjM-unsplash.jpg'
import Bread from './assets/img/anna-monina-rafal-vX075UlhgP4-unsplash.jpg'
import Burger from './assets/img/delfina-cocciardi-NDPBK-d-03M-unsplash.jpg'
import Salad from './assets/img/anna-pelzer-IGfIGP5ONV0-unsplash.jpg'
import Natas from './assets/img/samantha-gollnick-cnr5T5HUiZE-unsplash.jpg'
import Panacota from './assets/img/wesual-click-BgirKolxbIk-unsplash.jpg'


const getImage = (importedImage, description) => {
    const img = new Image()
    img.src = importedImage
    img.setAttribute('alt', description)
    img.classList.add('main-food')
    return img
}


//const cheese = getImage(Cheese, 'cantal entre-deux')

const showMenu = () => {
    const menuSection = document.createElement('section')
    const title = document.createElement('h1')
    title.innerText = 'Delicious deals'
    menuSection.appendChild(title)
    return menuSection
}


export {
    getImage,
    showMenu
}