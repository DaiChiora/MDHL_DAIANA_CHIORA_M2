let events = data.events
for (let i=0; i<events.length; i++) {
  console.log(events[i]);
}
console.log(events[1].date)


let currentDate = data.currentDate

console.log(currentDate)

let fechas = []
for (let i=0; i<events.length; i++) {
let fechas = [events[i].date]
  console.log(fechas)
}
let eventosPasados = []
let eventosFuturos =[]
for (let i=0; i<events.length; i++) {
  if (events[i].date<currentDate)
  eventosPasados.push (events[i])
  else eventosFuturos.push(events[i])
}
console.log(eventosPasados)
console.log(eventosFuturos)