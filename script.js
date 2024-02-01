// Ejercicio #1
function calcularPotencia() {
    var base = document.getElementById("base").value;
    var exponente = document.getElementById("exponente").value;
    var resultado = Math.pow(base, exponente);
    document.getElementById("resultado1").innerText = "Resultado: " + resultado;
}

// Ejercicio #2
function convertirFarenheit() {
    var gradosC = document.getElementById("gradosC").value;
    var resultado = (gradosC * 9/5) + 32;
    document.getElementById("resultado2").innerText = "Farenheit: " + resultado.toFixed(2);
}

// Ejercicio #3
var nombres = [];
function agregarNombre() {
    var nombre = document.getElementById("nombre").value;
    nombres.push(nombre);
    actualizarLista("listaNombres", nombres);
}

function filtrarNombres() {
    var numLetras = document.getElementById("numLetras").value;
    var nombresFiltrados = nombres.filter(function(nombre) {
        return nombre.length === parseInt(numLetras);
    });
    actualizarLista("listaFiltrada", nombresFiltrados);
}

function actualizarLista(idLista, lista) {
    var ul = document.getElementById(idLista);
    ul.innerHTML = "";
    lista.forEach(function(item) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    });
}

// Ejercicio #4
function calcularEdad() {
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var fechaNac = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    document.getElementById("resultado4").innerText = "Edad: " + edad + " años";
}

// Ejercicio #5
function contarPalabras() {
    var hilera = document.getElementById("hilera").value;
    var palabras = hilera.split(/\s+/).filter(function(palabra) {
        return palabra.length > 0;
    });
    var numPalabras = palabras.length;
    document.getElementById("resultado5").innerText = "Número de palabras: " + numPalabras;
}