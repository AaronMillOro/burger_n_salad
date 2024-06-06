const showContact = () => {
    const contactSection = document.createElement('section')
    const title = document.createElement('h1')
    const mapSection = document.createElement('div')
    mapSection.setAttribute('id', 'mapId') // mapId identical to leafletMap.js 
    contactSection.classList.add('page-details')
    title.innerText = 'Where to find us ?'
    const info = document.createElement('p')
    info.innerText = `
    From Monday to Saturday
    From 11 a.m until 11 p.m`
    contactSection.appendChild(title)
    contactSection.appendChild(info)
    contactSection.appendChild(mapSection)
    return contactSection
}


export {
    showContact
}