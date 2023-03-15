let currentDate = data.currentDate
let contenedorSection2 = document.getElementById('section2')
let eventosFuturos = events.filter(event => event.date>currentDate)
let eventosPasados = events.filter(event => event.date<currentDate)



dibujarTarjetas(eventosFuturos, contenedorSection2) 