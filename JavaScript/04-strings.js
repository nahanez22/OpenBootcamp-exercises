let nombre = "Nahum";
let apellido = "Añez";
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();

console.log(estudianteMayus, estudianteMinus);

let long = estudianteMinus.length;
console.log(long);

let primeraLetraNom = nombre.substring(0, 1);

console.log(primeraLetraNom);

let ultimaLetraApell = apellido[apellido.length - 1];

console.log(ultimaLetraApell);

let sinEspacio = estudiante.replace(/ /g, "");
console.log(sinEspacio);

let verdadero = estudiante.includes(nombre);
console.log(verdadero);
