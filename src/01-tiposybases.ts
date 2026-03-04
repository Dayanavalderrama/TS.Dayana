/*-Tipos Primitivos (Bases)

string-Cadenas de texto
number-Números enteros y decimales
boolean-Valores true o false
null-Representa ausencia de valor
undefined-Valor no definido
bigint-Números enteros grandes
symbol-Valores únicos e inmutables

-Tipos Compuestos"complejas que combinan multiples valores"
object-Representa cualquier objeto
array-Lista de valores de un tipo especifico
tuple-Lista con un número fijo de valores 
con tipos especificos
enum-Conjunto de valores constantes con 
nombres descriptivos

-Tipos Avanzados"la reestructura del codigo"
any-Puede ser cualquier tipo (evita la |verificación de tipos)
unknown-Similar a any, pero más seguro
void-Indica que una función no devuelve valor
never-Representa valores que nunca ocurren (errores, bucles infinitos)
union (`-`)
intersection(&)-Un valor debe cumplir múltiples tipos
type-Permite crear un alias de tipo
interface-Define la estructura de un objeto*/


//let mensaje = "Hola"; //TypeScript infiere a partir del valor asignado

//let mensaje: string = "Hola"; //Especificamos el tipo de dato


//export const name = 'Diego';

//console.log(name);


export const name: string = 'Diego';

console.log(name);