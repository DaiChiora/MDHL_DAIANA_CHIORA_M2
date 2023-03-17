fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {
  let events = data.events
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
html += `<div class="card mb-3" style="max-width: 60rem;">
<div class="row g-0">
  <div class="d-flex col-md-5">
    <img src="${eventoSeleccionado.image}" class="img-fluid rounded-start">
  </div>
  <div class="col-md-7">
    <div class="card-body">
      <h5 class="card-title">${eventoSeleccionado.name}</h5>
      <p class="card-text">${eventoSeleccionado.description}</p>
      <p class="card-text"><span>Category:</span> ${eventoSeleccionado.category}</p>
      <p class="card-text"><span>Capacity:</span> ${eventoSeleccionado.capacity}</p>
      <p class="card-text"><span>Place: </span>${eventoSeleccionado.place}</p>
      <p class="card-text"><span>Date: </span>${eventoSeleccionado.date}</p>
      <p class="card-text"><span>Price: </span>${eventoSeleccionado.price}</p>
      <a href="./index.html" class="card-link">Return</a>
      </div>
  </div>
</div>
</div>`
detalle.innerHTML = html

});