let data3 = fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {
  let events = data.events
  let currentDate = data.currentDate
  let eventosPasados = events.filter(event => event.date<currentDate)
let contenedorSection3 = document.getElementById('section3')
let checkContainer3 = document.getElementById('check')


crearCheck (events, checkContainer3)
dibujarTarjetas (eventosPasados, contenedorSection3)

SEARCH.addEventListener('input', () => {
    let primerFiltro = filtroTexto(eventosPasados, SEARCH.value)
    let segundoFiltro = filtroCheck(primerFiltro)
    dibujarTarjetas(segundoFiltro, contenedorSection3)
  })

  checkContainer3.addEventListener ("change", ()=>{
    let primerFiltro = filtroTexto(eventosPasados, SEARCH.value)
    let segundoFiltro = filtroCheck(primerFiltro)
    dibujarTarjetas(segundoFiltro, contenedorSection3)}) 
  });