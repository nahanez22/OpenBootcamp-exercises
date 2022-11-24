// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let listaCompras = ["Azucar", "Verduras", "Carnes", "Harina", "Sal"];
listaCompras.splice(2, 0, "Aceite de Girasol");
listaCompras.splice(2, 1);

const listaPeliculas = [
  {
    titulo: " Abracadabra ",
    director: "Kenny Ortega ",
    fecha: new Date(1993, 7, 16),
  },
  {
    titulo: " El hombre bicentenario ",
    director: "Chris Colombus",
    fecha: new Date(1999, 12, 13),
  },
  {
    titulo: " El cisne negro ",
    director: "Darren Aronofsky ",
    fecha: new Date(2010, 12, 3),
  },
];

const nuevaListaPeliculas = listaPeliculas.filter(
  (peliculas) => peliculas.fecha > new Date(2010, 1, 1)
);

const listaDirectores = listaPeliculas.map((pelicula) => pelicula.director);

const listaTitulos = listaPeliculas.map((pelicula) => pelicula.titulo);

const producciones = listaDirectores.concat(listaTitulos);

const peliculas = [...listaDirectores, ...listaTitulos];
