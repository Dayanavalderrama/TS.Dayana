export const usuario1: { nombre: string; edad: number; activo: boolean } = {
    nombre: 'Diego',
    edad: 34,
    activo: true
};//Primera froma de definir un objeto sin usar interfaces


interface usuario2 {
    nombre: string;
    edad: number;
    telefono?: string; //el signo de pregunta indica que el campo es opcional
    activo: boolean;
}
export const usuario2: usuario2 = {
    nombre: 'Andres',
    edad: 30,
    activo: true
};//segunda forma de definir un objeto usando interfaces, es mas reutilizable y legible


type usuario3 = {
    nombre: string;
    edad: number;
    telefono?: string; //el signo de pregunta indica que el campo es opcional
    activo: boolean;
}
export const usuario3: usuario3 = {
    nombre: 'Paula',
    edad: 23,
    activo: true
};//Tercera forma de definir un objeto usando type, es similar a las interfaces pero con algunas diferencias, como la posibilidad de usar uniones e intersecciones de tipos.


//Usainterfacesi necesitas herencia y extensibilidad (extends).

//Usatypesi necesitas definir tipos más complejos o uniones (|).