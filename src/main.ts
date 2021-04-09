
import {Tareas, statusTarea} from "./reto1"
import {participante, evento} from "./reto2"
import {producto, distribuidores} from "./reto3"

//Esto es la asignacion de la clase a una variable
//Reto 1
let miTarea = new Tareas('Veronica', new Date (2021,4,2), 'esta es una descripcion', statusTarea.pendiente, ['Fisica', 'Quimica', 'Biologia'], ['Español', 'Algebra', 'Inglés'], ['Informática', 'Sociales']);

console.log(miTarea);

//Reto 2
const veronica = new participante('veronica', 3108385653, 'veronica.ardila@hotmail.com');
const leonardo = new participante('leonardo', 3108385653, 'veronica.ardila@hotmail.com');
const primerEvento = new evento('bienvenida', 20000, new Date(2021,3,3), 15, [veronica,leonardo]);
const segundoEvento = new evento('incio de clases', 20000, new Date(2021,3,3), 15, [veronica,leonardo]);
let historialEventos = [];
historialEventos.push(primerEvento, segundoEvento);

console.log(historialEventos);

//Reto 3
let descripcionProducto = new producto ( true, 'Arequipe', new Date(2022,5,13), 10000, 500, '1B520C', 'Alpina', 50 )
let descripcionProducto2 = new producto ( false, 'Cafe', new Date(2022,5,13), 10000, 500, '1B520C', 'Sello rojo', 50 )
let descripcionProducto3 = new producto ( true, 'Chocolate', new Date(2022,5,13), 10000, 500, '1B520C', 'Montblack', 50 )
let descripcionProducto4 = new producto ( false, 'Mantequilla', new Date(2022,5,13), 10000, 500, '1B520C', 'Celema', 50 )
let distribuidor = new distribuidores ('Alpina', 3257478, [`lacteos, bebidas`]);
let distribuidor2 = new distribuidores ('Celema', 3257478, [`lacteos, bebidas`]);
let productosExistentes = [];
let productosSolicitarDistribuidor = [];
let listaDistribuidores = [];
listaDistribuidores.push(distribuidor,distribuidor2);
productosExistentes.push(descripcionProducto, descripcionProducto3);
productosSolicitarDistribuidor.push(descripcionProducto2, descripcionProducto4);
console.log(productosExistentes, productosSolicitarDistribuidor, listaDistribuidores);



