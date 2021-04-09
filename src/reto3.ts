/*Reto 3.D2 requiere un registro de inventario básico, para ello necesita saber la lista de productos existentes en su  almacén principal, cada producto debe tener asignados los siguientes atributos: Nombre, fecha de vencimiento, precio, peso, uuid, distribuidor, cantidad.Se cuenta también con los datos de los distribuidores entre ellos: nombre, teléfono, productos que ofrece. Además, D2 requiere las siguientes listas: productos en almacén, productos por solicitar a distribuidor y lista de distribuidores*/

export class producto {

    public disponible : boolean;
    public nombre : string;
    public fechaVencimiento : Date;
    public precio : number;
    public peso : number;
    public uuid : string;
    public distribuidor : string;
    public cantidad : number;
    
     constructor(disponible: boolean, nombre:string, fechaVencimiento :Date, precio: number, peso : number, uuid : string, distribuidor : string, cantidad : number){

        this.disponible = disponible;
        this.nombre = nombre;
        this.fechaVencimiento = fechaVencimiento;
        this.precio = precio;
        this.peso = peso;
        this.uuid = uuid;
        this.distribuidor = distribuidor;
        this.cantidad = cantidad;
    }
}

export class distribuidores {

    public nombre : string;
    public telefono : number;
    public productosQueOfrece : string[];
   
    constructor(nombre:string, telefono : number, productosQueOfrece : string[]){
        this.nombre = nombre;
        this.telefono = telefono;
        this.productosQueOfrece = productosQueOfrece;
    }
}
