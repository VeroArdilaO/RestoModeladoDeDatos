/*Reto 2.
Queremos implementar un sistema de registro de eventos, para esto, necesitamos guardar una lista con  la información de las personas participantes del evento,  los datos mínimos por participante son: nombre completo, teléfono, correo. Cada evento cuenta con un nombre, precio, fecha y aforo máximo. Se desea guardar una lista con el historial de los eventos y que cada persona pueda ver los datos de los eventos a los que asistió y a los que piensa asistir en un futuro*/

export class participante {
    //Atributos
    public nombreCompleto : string;
    public telefono : number;
    public correo : string;

    constructor(nombreCompleto:string, telefono: number, correo:string) {
        this.nombreCompleto =  nombreCompleto;
        this.telefono = telefono;
        this.correo = correo;
    }
}

export class evento {
    //Atributos
    public nombre: string;
    public precio : number;
    public fecha : Date;
    public AforoMaximo : number;
    public listaPersonas : participante[];

    constructor(nombre:string, precio: number, fecha :Date, AforoMaximo : number, listaPersona : participante[]){
        this.nombre = nombre;
        this.precio = precio;
        this.fecha = fecha;
        this.AforoMaximo = AforoMaximo;
        this.listaPersonas = listaPersona;
    }
}


