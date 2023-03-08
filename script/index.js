let events = data.events
let contenedorSection = document.getElementById('section')
function dibujarTarjetas(array, contenedor) {
  for (event of array) {
    const CARD = document.createElement('div')
    CARD.innerHTML =
      `<div class="card" style="width: 15rem; height: 25rem;">
    <div class="d-flex justify-content-center align-items-center">
    <img src=${event.image} class="card-img-top" alt="music_concert">
  </div>
    <div class="card-body">
      <h5 class="card-title text-center pb-3">${event.name}</h5>
      <p class="card-text text-center">${event.description}</p>
    </div>
    <div class="card-body d-flex justify-content-between align-items-end align-content-end">
      <p>Price: ${event.price}</p>
      <a href="./details.html" class="card-link">Ver más</a>`
    contenedor.appendChild(CARD)
  }
}

dibujarTarjetas(events, contenedorSection)



