//RETO 1 
/*Para un sistema de gestión de tareas, deseamos registrar todas las tareas, cada tarea tiene asociada la siguiente información: nombre, fecha de inicio, descripción y estatus, el estatus debe ser uno de los siguientes: pendiente, en proceso, terminada, cancelada. Además se requiere una lista con todas las tareas pendientes, las tareas terminadas y las canceladas*/

export class Tareas{
    //Esto es una variable pero en clases se conoce como atributo
    public nombre :string;
    public fechaInicio : Date;
    public descripcion : string;
    public status : string;
    public tareasPendientes : string[];
    public tareasTerminadas : string[];
    public tareasCanceladas : string[];
    
    //Esto es como un inicializador o un puente
    constructor(nombre:string, fechaInicio: Date, description:string, status:string, tareasPendientes:string[], 
        tareasTerminadas:string[], tareasCanceladas:string[]){

        this.nombre =  nombre;
        this.fechaInicio = fechaInicio;
        this.descripcion = description;
        this.status = status;
        this.tareasPendientes = tareasPendientes;
        this.tareasTerminadas = tareasTerminadas;
        this.tareasCanceladas = tareasCanceladas;
    }
}
/*Esto es un string enum permite crear una variable constante, que define todos los posibles valores fijos que pueda contener. Conjunto de numero a los cuales les damos un nombre
la idea del enum es hacer el codigo mas legible*/

export enum statusTarea {
    pendiente = 'Pendiente',
    proceso =   'En proceso',
    terminada = 'Terminada',
    cancelada = 'Cancelada'
}
