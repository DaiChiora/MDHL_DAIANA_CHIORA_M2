let events = data.events
let contenedorSection = document.getElementById('section')
const SEARCH = document.getElementById('search')
dibujarTarjetas(events, contenedorSection)


function dibujarTarjetas(array, contenedor) {
    let CARD = ''
    array.forEach (elemento => {
    CARD +=
      `<div class="cards-container d-flex flex-wrap justify-content-around" width=100%>
      <div class="card" style="width: 15rem; height: 25rem;">
    <div class="d-flex justify-content-center align-items-center">
    <img src=${elemento.image} class="card-img-top" alt="music_concert">
  </div>
    <div class="card-body">
      <h5 class="card-title text-center pb-3">${elemento.name}</h5>
      <p class="card-text text-center">${elemento.description}</p>
    </div>
    <div class="card-body d-flex justify-content-between align-items-end align-content-end">
      <p>Price: ${elemento.price}</p>
      <a href="./details.html" class="card-link">Ver más</a>
    </div>
    </div>`
  })
  contenedor.innerHTML = CARD

}


function filtroTexto (array, texto) {
  let arrayFiltrado = array.filter (elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
  return arrayFiltrado
}

SEARCH.addEventListener('input', () => {
  let arrayFiltrado = filtroTexto(events, SEARCH.value)
  dibujarTarjetas(arrayFiltrado, contenedorSection)
})



























/* let arrayFiltrado = []
function filtrarCartas(array) {
  let checkboxs = Array.from(document.querySelectorAll('input[type="checkbox"]'))
  let categoriaCheck = checkboxs.filter (checkbox => checkbox.checked)
  if (categoriaCheck.length == 0) {
    return array
  }
  let value = categoriaCheck.map (categoria => categoria.value)
  let arrayFiltrado = array.filter (elemento => value = elemento.category)
  return arrayFiltrado}


  function dibujarTarjetas(array) {
    array.forEach(elemento => {
      const CARD = document.createElement('div')
      CARD.innerHTML = `<div class="card" style="width: 15rem; height: 25rem;">
      <div class="d-flex justify-content-center align-items-center">
      <img src=${array.image} class="card-img-top" alt="music_concert">
    </div>
      <div class="card-body">
        <h5 class="card-title text-center pb-3">${array.name}</h5>
        <p class="card-text text-center">${array.description}</p>
      </div>
      <div class="card-body d-flex justify-content-between align-items-end align-content-end">
        <p>Price: ${array.price}</p>
        <a href="./details.html" class="card-link">Ver más</a>`
      contenedor.appendChild(CARD)
    })
  }

let check = document.getElementById("check")
check.addEventListener("change", ()=>{
  let arrayFiltrado = filtrarCartas(events)
  dibujarTarjetas(arrayFiltrado, contenedorSection)
}) */