// 1- COMO PRIMER PASO TENEMOS QUE HACER LAS IMPORTANCIONES NECESARIAS---
//Importaremos los objetos del js de ciudades
import { barcelona, roma, paris, londres } from "./ciudades.js";

// 2. SUBTRAER Y ALMACENAR EN VARIABLE TODO LOS ID Y ENLACE A NUESTRO JS---
//Obtener los elemtos del dom o del documento
//hacemos un consulta y selecccioname todos las etiquetas 'a' de enlaces
let enlaces = document.querySelectorAll('a');
//Llammaos a lo elementos que contiene id
let tituloElemento = document.getElementById('titulo');
let subTituloElemento = document.getElementById('subtitulo');
let parrafoElemento = document.getElementById('parrafo');

//Foreach
enlaces.forEach(function (enlace) { // 1- primero recoremos todos los enlaces
  enlace.addEventListener("click", function () { // 2- escuchamos el evento onclik o el clik del enlace
    enlaces.forEach(function (enlace) { // 3- recorremos nuevamente los enlace 
      enlace.classList.remove("active");  // 4- removemos el active de todos los enlace
    });

    // agregar la clase active en el enlace actual
  this.classList.add('active') // con el this activamos el active al enlace actual

  //obtener el contenido correspondiente segun el enlace
  let contenido = obtenerContenido(this.textContent) // obtenmos  el contenido correspondiente segun el enlace
  // textContent almcena la palbra clave del lugar

  //Mostrar el contenido en al documento html
  tituloElemento.innerHTML = contenido.titulo
  subTituloElemento.innerHTML = contenido.subtitulo
  parrafoElemento.innerHTML = contenido.parrafo
  });

  

});

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
