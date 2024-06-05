const showContact = () => {
    const contactSection = document.createElement('section')
    contactSection.classList.add('page-details')
    const title = document.createElement('h1')
    title.innerText = 'Where to find us ?'
    const info = document.createElement('p')
    info.innerText = `
    From Monday to Saturday
    From 11 a.m until 11 p.m
    We are here 👨‍🍳`
    contactSection.appendChild(title)
    contactSection.appendChild(info)
    return contactSection
}


export {
    showContact
}