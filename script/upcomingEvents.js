let data2 = fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {
  let events = data.events
let currentDate = data.currentDate
let contenedorSection2 = document.getElementById('section2')
let eventosFuturos = events.filter(event => event.date>currentDate)

let checkContainer2 = document.getElementById('check')


crearCheck(events, checkContainer2)
dibujarTarjetas(eventosFuturos, contenedorSection2)


SEARCH.addEventListener('input', () => {
    let primerFiltro = filtroTexto(eventosFuturos, SEARCH.value)
    let segundoFiltro = filtroCheck(primerFiltro)
    dibujarTarjetas(segundoFiltro, contenedorSection2)
  })

  checkContainer2.addEventListener ("change", ()=>{
    let primerFiltro = filtroTexto(eventosFuturos, SEARCH.value)
    let segundoFiltro = filtroCheck(primerFiltro)
    dibujarTarjetas(segundoFiltro, contenedorSection2)}) 
    
  });
     