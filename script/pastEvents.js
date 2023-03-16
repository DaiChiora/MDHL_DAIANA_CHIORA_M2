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