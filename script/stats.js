fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(data => {

let events = data.events
let currentDate = data.currentDate
let eventosFuturos = events.filter(event => event.date>currentDate)
let eventosPasados = events.filter(event => event.date<currentDate)

tabla1 = document.getElementById('tabla1');
tabla2 = document.getElementById('tabla2');
tabla3 = document.getElementById('tabla3');
tabla4 = document.getElementById('tabla4');
tabla5 = document.getElementById('tabla5');
dibujarTabla(tabla1, porcentajeAsistenciaMayor(eventosPasados))
dibujarTabla(tabla2, porcentajeAsistenciaMenor(eventosPasados))
dibujarTabla2(tabla3, eventoCapacidadMayor(events))
dibujarTablaCategoria2(eventosFuturos, tabla4)
dibujarTablaCategoria(eventosPasados, tabla5) 



});
function dibujarTabla (contenedor, array) 
{
    contenedor.innerHTML = "";
    contenedor.innerHTML += `<td>${array.name}` + ' (' +`${array.porcentajeDeAsistencia}` + ')' + `</td>`
}
function dibujarTabla2 (contenedor, array) 
{
    contenedor.innerHTML = "";
    contenedor.innerHTML += `<td>${array.name}` + ' (' +`${array.capacity}` + ')' + `</td>`
}
function dibujarTablaCategoria (array, contenedor) {
    let contenedorTabla = ''
    arrayCategorias(array).forEach (elemento => {
    let filtro = filtroCategorias(array, elemento)
        contenedorTabla += `<tr>
                                <td>${elemento}</td>
                                <td>$${recaudacion(filtro)}</td>
                                <td>${promedioAsistenciaPasados(filtro).toFixed(2)}%</td>
                            </tr>`
    
    contenedor.innerHTML = contenedorTabla })
}
function dibujarTablaCategoria2 (array, contenedor) {
    let contenedorTabla = ''
    arrayCategorias(array).forEach (elemento => {
    let filtro2 = filtroCategorias(array, elemento)
        contenedorTabla += `<tr>
                                <td>${elemento}</td>
                                <td>$${recaudacion2(filtro2)}</td>
                                <td>${promedioAsistenciaPasados(filtro2).toFixed(2)}%</td>
                            </tr>`
    
    contenedor.innerHTML = contenedorTabla })
}

function porcentajeAsistencia(array) {
    let porcentajeAsistenciaEventos = array.map (elemento =>({name : elemento.name, porcentajeDeAsistencia : ((elemento.assistance/elemento.capacity)*100)}))
    return porcentajeAsistenciaEventos
}

function porcentajeAsistenciaMenor(array) {
    let asistenciaOrdenadaMenor = porcentajeAsistencia(array).sort((a,b) => {
        if (a.porcentajeDeAsistencia > b.porcentajeDeAsistencia) {
            return 1;
            }
            if (a.porcentajeDeAsistencia < b.porcentajeDeAsistencia) {
            return -1;
            }
            return 0;
        });
    return asistenciaOrdenadaMenor[0]
}
function porcentajeAsistenciaMayor(array) {
    let asistenciaOrdenadaMayor = porcentajeAsistencia(array).sort((a,b) => {
        if (a.porcentajeDeAsistencia > b.porcentajeDeAsistencia) {
            return -1;
            }
            if (a.porcentajeDeAsistencia < b.porcentajeDeAsistencia) {
            return 1;
            }
            return 0;
        });
    return asistenciaOrdenadaMayor[0]
}

function eventoCapacidadMayor(array) {
    let capacidadMayor = array.sort((a,b) => {
        if (a.capacity > b.capacity) {
            return -1;
            }
            if (a.capacity < b.capacity) {
            return 1;
            }
            return 0;
        });
    return capacidadMayor[0]
}

function filtroCategorias(array, categoria) {
    let arrayCategoria = array.filter(elemento => elemento.category == categoria)
    let arrayCategoriaCompleta = arrayCategoria.map (elemento => ({category : elemento.category, porcentajeDeAsistencia : (((elemento.assistance || elemento.estimate)/elemento.capacity)*100), assistance: elemento.assistance, price: elemento.price, estimate: elemento.estimate}))
    return arrayCategoriaCompleta
}


function arrayCategorias (array) {
    let categorias = array.map (elemento => elemento.category)
  let arrayCategorias = Array.from(new Set(categorias))
  arrayCategorias.sort((a,b) => {
    if (a > b) {
        return 1;
        }
    if (a < b) {
    return -1;
    }
    return 0
  })
  return arrayCategorias
}
function promedioAsistenciaPasados(array){
    let asistenciaPasados = array.map(elemento => elemento.porcentajeDeAsistencia)
    let asistenciaTotal = asistenciaPasados.reduce((a, b) => a + b, 0)
    let promedioAsistencia = asistenciaTotal / array.length
    return promedioAsistencia
}
function recaudacion (array) {
    let recaudacionEvento = array.map (elemento => elemento.price * elemento.assistance || elemento.estimate)
    let recaudacion = recaudacionEvento.reduce((a, b) => a + b, 0)
    return recaudacion
}
function recaudacion2 (array) {
    let recaudacionEvento = array.map (elemento => elemento.price * elemento.estimate)
    let recaudacion = recaudacionEvento.reduce((a, b) => a + b, 0)
    return recaudacion
}



