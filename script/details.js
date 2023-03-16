

console.log(location)
let queryString = location.search

console.log(queryString)
let parametros = new URLSearchParams(queryString)

let id = parametros.get('id')

console.log(id)

let eventoSeleccionado = events.find (elemento => elemento._id == id)
console.log(eventoSeleccionado)

let detalle = document.getElementById("detalle")
console.log(detalle)


let html = ''
html += `<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${eventoSeleccionado.image}" class="img-fluid rounded-start" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${eventoSeleccionado.name}</h5>
      <p class="card-text">${eventoSeleccionado.description}</p>
      <p class="card-text">${eventoSeleccionado.category}</p>
      <p class="card-text">${eventoSeleccionado.capacity}</p>
      <p class="card-text">${eventoSeleccionado.place}</p>
      <p class="card-text">${eventoSeleccionado.date}</p>
      <p class="card-text">${eventoSeleccionado.price}</p>
      <a href="./index.html" class="card-link">Return</a>
    </div>
  </div>
</div>
</div>`
detalle.innerHTML = html