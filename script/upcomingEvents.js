let currentDate = data.currentDate
let contenedorSection2 = document.getElementById('section2')


let eventosPasados = []
let eventosFuturos =[]
for (let i=0; i<events.length; i++) {
  if (events[i].date<currentDate)
  eventosPasados.push(events[i])
  else eventosFuturos.push(events[i])
}

dibujarTarjetas(eventosFuturos, contenedorSection2)


 