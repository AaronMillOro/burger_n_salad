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


// typeMeal can be fat or healty
const showMeal = (img, imgAlt, price, description, typeMeal) => {
    const meal = document.createElement('article')
    const mealInfo = document.createElement('p')
    const mealPrice = document.createElement('p')
    mealPrice.style.fontWeight = 'bold'
    mealPrice.style.fontSize = '0.9rem'
    const imgMeal = getImage(img, imgAlt) 
    meal.classList.add('meal', typeMeal)
    mealPrice.innerText = `${price} DOGE`
    mealInfo.innerText = description
    mealInfo.appendChild(mealPrice)
    meal.appendChild(imgMeal)
    meal.appendChild(mealInfo)
    return meal
}


const showMenu = () => {
    const menuSection = document.createElement('section')
    menuSection.classList.add('menu-details')
    const menus = document.createElement('section')
    menus.classList.add('info')
    const fatMenu = document.createElement('section')
    const healthyMenu = document.createElement('section')
    const title = document.createElement('h1')
    title.innerText = 'Delicious deals'
    menuSection.appendChild(title)
    const cheese = showMeal(Cheese, 'cantal entre-deux', 75, 'Cantal entre-deux', 'fat')
    const burger = showMeal(Burger, 'beef burger', 175, 'Angus beef burger', 'fat')
    const natas = showMeal(Natas, 'pastel de natas', 95, 'Pastel de natas', 'fat')
    const bread = showMeal(Bread, 'garlic bread', 75, 'Spicy garlic bread', 'healthy')
    const salad = showMeal(Salad, 'salad', 195, 'Mediterranean salad', 'healthy')
    const panacota = showMeal(Panacota, 'panacota', 105, 'Strawberry panacota', 'healthy')
    fatMenu.appendChild(cheese)
    fatMenu.appendChild(burger)
    fatMenu.appendChild(natas)
    healthyMenu.appendChild(bread)
    healthyMenu.appendChild(salad)
    healthyMenu.appendChild(panacota)
    menus.appendChild(fatMenu)
    menus.appendChild(healthyMenu)
    menuSection.appendChild(menus)
    return menuSection
}


export {
    getImage,
    showMenu
}