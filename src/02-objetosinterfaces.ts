interface Usuario1 {
    nombre: string;
    edad: number;
    activo: boolean;
}
export const Usuario1: { nombre: string; edad: number; activo: boolean } = {
    nombre: 'Diego',
    edad: 34,
    activo: true
};//Primera froma de definir un objeto sin usar interfaces


interface Usuario2 {
    nombre: string;
    edad: number;
    telefono?: string; //el signo de pregunta indica que el campo es opcional
    activo: boolean;
}
export const Usuario2: Usuario2 = {
    nombre: 'Diego',
    edad: 30,
    activo: true
};//segunda forma de definir un objeto usando interfaces, es mas reutilizable y legible


type Usuario3 = {
    nombre: string;
    edad: number;
    telefono?: string; //el signo de pregunta indica que el campo es opcional
    activo: boolean;
}
export const Usuario3: Usuario3 = {
    nombre: 'Diego',
    edad: 23,
    activo: true
};//Tercera forma de definir un objeto usando type, es similar a las interfaces pero con algunas diferencias, como la posibilidad de usar uniones e intersecciones de tipos.


//Usainterfacesi necesitas herencia y extensibilidad (extends).

//Usatypesi necesitas definir tipos más complejos o uniones (|).

export const user= [] //ARREGLO VACIO

user.join() //AGREGAR ELEMENTOS AL ARREGLO

// EL ERROR SE PUEDE ARREGLAR UTILIZANDO ARRAY USERS

const Diego: Usuario3 = {
    nombre: 'Diego',
    edad: 43,
    activo: true
}
const alberto: Usuario3 = {
    nombre: 'Alberto',
    edad: 23,
    activo: true
}

export const users: Usuario3[] = [] //ARREGLO DE USUARIOS

users.push(Diego, alberto);

console.log(users)

//ARRAYS
//Forma 1: usando tipo[]
let numeros: number[] = [1, 2, 3, 4, 5];
let nombres: string[] = ['Diego', 'Alberto'];

//Forma 2: usando Array<tipo>
let numeros2: Array<number> = [1, 2, 3, 4, 5];
let nombres2: Array<string> = ['Diego', 'Alberto'];

//Ambas son equialentes, pero la forma 1 es más común y legible. La forma 2 es útil cuando se necesitan tipos más complejos o uniones.

//Arreglos de multiples tipos(uniones)
const mezcla: (number | string)[] = [1, 'Hola', 2, 'Mundo'];


//Arreglos de objetos
interface Usuario {
    nombre: string;
    edad: number;
}
let usuario: Usuario[] = [
    { nombre: 'Diego', edad: 34 },
    { nombre: 'Alberto', edad: 23 }
];