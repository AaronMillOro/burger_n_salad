import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const showMap = () => {
    let map = L.map('mapId').setView([48.69994, 2.18451], 17)
    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }
    ).addTo(map)
    let popup = L.popup().setLatLng([48.69994, 2.18451]).setContent('We are here 👨‍🍳').openOn(map);
    return map
}


export {
    showMap
}