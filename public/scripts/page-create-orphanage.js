//create mapp
const map = L.map('mapid').setView([-24.007038,-46.4231586], 16);

//create and add titleLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: '/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

let marker;

//creat and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
})

//photos upload
function addPhotoField() {
    //pegar o container de fotos #images
    const container = document.querySelector('#images');

    //pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //deixado o campo vazio ao enviar uma nova imagem
    const input = newFieldContainer.children[0]

    //verificar se o campo está vazio (se sim não adicionar o container de imagens)
    if (input.value == '') {
        return 
    }

    //campo vazio
    input.value = ''

    //adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1) {
        //limpar o valor do campo
        span.parentNode.children[0].value = ''

        return
    }

    //deletar o campo
    span.parentNode.remove();
}

//selec yes or no
function  toggleSelect() {
    //retirar a class .active (dos botoes)
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

    //colocar a class .active no botao clickado
    const button  = event.currentTarget
    button.classList.add('active')

    //ataualizar meu input hidden com o valor selcionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    //verificar se sim ou nao
    input.value = button.dataset.value
}

//validar posição no mapa
function validate(event) {
    const lat = document.querySelector('input.lat')
    const lng = document.querySelector('input.lng')

    if(lat.value === '' || lng.value === '') {         event.preventDefault()
        alert('Clique no mapa para adicionar o local do seu orfanato!')
    }
}

