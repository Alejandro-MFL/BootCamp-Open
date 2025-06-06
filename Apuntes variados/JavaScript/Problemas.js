//Ejercicios practicos Curso https://www.aprendejavascript.dev/

/* Métodos y propiedades de Array
 
 En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una función procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
 -El primer elemento lo sacamos del array, ya que es el nombre del cliente.
 -Añadimos al principio del array la cadena de texto "bebida", ya que es una promoción que tenemos.
 -Después añadimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:
 */

function procesarPedido(pedidos) {
    const nombreCliente = pedidos.shift()
    pedidos.unshift("bebida")
    pedidos.push(nombreCliente)

    return pedidos
}

/* Iteración de Arrays en JavaScript
 
 Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. 
 La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la suma total. Usa el bucle que quieras para solucionarlo. 
 */

function sumarPares(numeros) {
    let suma = 0
    for (let numero of numeros) {
        if (numero % 2 === 0) {
          suma += numero
        }
    }
    return suma
}
/* Búsqueda en Arrays con sus métodos
 
 Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
Usa el método endsWith() de string para resolverlo.
 */

function acabanEnA(words) {
    const comprobacion = words.every(word => word.endsWith("a"))
    return comprobacion
}
/*Ordenamiento de Arrays en JavaScript
 
 Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. Eso quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.
Por ejemplo, si recibes [5, -10, -2, -25, -7] deberías devolver [-2, 5, -7, -10, -25].
Puedes usar el método Math.abs(num) para obtener el valor absoluto de un número.
 */
function sortAbsoluteNumbers(numbers) {
    numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
    return numbers
}
/*Transformación de Arrays en JavaScript

Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista.
Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más largas (length) que el número del índice.
Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.
 */
function buscaPalabras(words, word) {
    const indexOfWord = words.indexOf(word)
    const SearchLonger = words.reduce((accumulator, currentWord) => {
        if (currentWord.length > indexOfWord) {
            return accumulator.concat(currentWord)
        } else {
            return accumulator
        }
    }, [])
    return SearchLonger;
}
/*Matrices
 
 Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra "JavaScript" en la matriz y devolver su posición como un array de dos elementos:
 el índice de la fila y el índice de la columna.

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]

Si no encuentra la palabra debe devolver [-1, -1].
 */

//Usando for of por practicar aunque no es ideal por no poder usar índices
function findJavaScript(matrix) {
    let y = -1
    for (let arrayInY of matrix) {
        y++
        let x=-1
        for (let arrayInX of arrayInY) {
            x++
            if (arrayInX === "JavaScript") {
                return [y,x]
            }
        }
    }       
    return [-1, -1]    
}
//Usando for:
function findJavaScript(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === "JavaScript") {
                return [y, x];
            }
        }
    }
    return [-1, -1];
}
/*Algoritmos con Arrays
 
 En una biblioteca queremos saber qué libro es el que menos páginas tiene y el que más páginas. Por suerte, no hay dos libros con el mismo número de páginas.
Necesitamos que la función reciba un array de números, sin ordenar, y que devuelva un array de dos posiciones con el índice del libro con menos páginas y el índice del libro con más páginas.
 */

//Usando metodos, pocas lineas y facil de leer. Problema: Recorre demasiadas veces el array
function minAndMaxWord(words) {
    const libroGrande = Math.max(...words)
    const libroPequeño = Math.min(...words)
    const indexPequeño = words.indexOf(libroPequeño)
    const indexGrande = words.indexOf(libroGrande)
    return [indexPequeño, indexGrande]
}

//Reduciendo la complejidad logarítmica

function minAndMaxWord(words) {
    let indexPequeño = 0
    let indexGrande = 0
    for (let i = 1; i < words.length; i++) {
        if (words[i] > words[indexGrande]) { indexGrande = i }
        if (words[i] < words[indexPequeño]) { indexPequeño = i }
    }
    return [indexPequeño,indexGrande]
}
/*Objetos
 
 Tenemos una función que recibe dos parámetros. name y subs. Haz que la función devuelva un objeto con la siguiente información:

 -name con el valor del parámetro name
 -subscribers con el valor del parámetro subs
 -hash, con el valor de la longitud del string name multiplicado por el parámetro subs
 -Un método getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el método getStatus devolvería El canal de Dani tiene 100 suscriptores.
¡Ojo! El método getStatus debe devolver el texto, NO imprimirlo por consola.
 */

function createObject(name, subs) {
    const usuario = {
        name: name,
        subscribers: subs,
        hash: name.length * subs,
        getStatus: function () {
            const titulo = `El canal de ${this.name} tiene ${this.subscribers} suscriptores`
            return titulo
        }
    }
    return usuario
}
/*Iterando Objetos en JavaScript
 
 Tienes una función que recibe un objeto como parámetro. La función debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la función debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
 */

//Usando for ... in
function getKeysOfBooleanValues(obj) {
    const arrayBoolean = []
    for (let variable in obj) {
        if (typeof obj[variable] === "boolean") {
            arrayBoolean.push(variable)
        }
    }
    return arrayBoolean
}
//Usando Object.key()
function getBooleanKeys(obj) {
    return Object.keys(obj).filter(key => typeof obj[key] === "boolean");
}

/*Operador de Encadenamiento Opcional
 
 Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qué nos vamos a encontrar porque vamos casi a ciegas. Vamos con un pequeño robot y funciona con un programa que recibe tres parámetros:

-Un objeto con la información del fondo marino
-Una cadena de texto con el nombre del lugar que queremos explorar
-Una cadena de texto con el nombre del objeto que queremos encontrar

Por ejemplo. Con el objeto ocean que nos llega como primer parámetro, podemos explorar el lugar deep y buscar el objeto treasure. Así que intentaríamos acceder a ocean.deep.treasure.
Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. Sólo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.
Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido.
Así que vamos a usar el operador de encadenamiento opcional para evitar errores.
Pista: ¡Recuerda que en una clase anterior hemos visto cómo podemos acceder a una propiedad de un objeto usando una variable! 
Por ejemplo, si tenemos un objeto person y una variable key con el valor name, podemos acceder a la propiedad name del objeto person usando person[key] y sería como hacer person.name.
 */

function searchInOcean(ocean, section, item) {
    return ocean[section]?.[item] !== undefined;
}

/*
 *
 Vamos a experimentar con valor y referencia. Tienes una función updateStats que recibe dos argumentos: un número level y un objeto character.
Dentro de la función:
Incrementa el level en 1. Cambia la propiedad status del objeto character a 'active'. Fuera de la función:
Declara una variable currentLevel inicializada en 5. Declara un objeto player con las propiedades name:
'Hero' y status: 'inactive'. Llama a updateStats pasándole currentLevel y player. 
Imprime por consola el valor de currentLevel y el objeto player después de llamar a la función. Observa qué valores han cambiado y cuáles no. La función debe devolver el objeto character modificado.
 */
function updateStats(level, character) {
    level++
    character.status = "active"
    return character
}
let currentLevel = 5
let player = {
    name: "Hero",
    status: "inactive"
}
updateStats(currentLevel, player)
console.log(currentLevel, player)

// Dado el siguiente array, suma solo los números pares
const numeros = [1, 4, 7, 10, 13, 16];

let sumaPares = 0;
// Tu código aquí
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i];
    }
}

console.log("Suma de pares:", sumaPares);

// Escribe una función que reciba una frase y una letra, y cuente cuántas veces aparece esa letra

function contarLetra(frase, letra) {
    // Tu código aquí
    let contador = 0;
    for (let char of frase) {
        if (char.toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

console.log(contarLetra("Javascript es genial", "a")); // Debería devolver 3

// Una palabra palíndroma se lee igual al derecho que al revés
// Ejemplo: "oso", "reconocer"

function esPalindromo(palabra) {
    // Tu código aquí
    const invertida = palabra.split("").reverse().join("");
    return palabra === invertida;

}

console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("javascript")); // false

// Dado el siguiente array de personas, devuelve un nuevo array solo con los mayores de edad

const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Carlos", edad: 15 },
    { nombre: "Lucía", edad: 30 }
];

// Tu código aquí
const mayores = personas.filter(persona => persona.edad >= 18);

console.log(mayores); // [{nombre: "Luis", edad: 22}, {nombre: "Lucía", edad: 30}]
// Escribe una función que reemplace todas las ocurrencias de una palabra por otra

function reemplazar(frase, palabraOriginal, palabraNueva) {
    // Tu código aquí
    return frase.split(palabraOriginal).join(palabraNueva);
}

console.log(reemplazar("Me gusta el chocolate", "chocolate", "helado"));
// "Me gusta el helado"

// Crea una función que calcule la media de una lista de números

function calcularMedia(lista) {
    // Tu código aquí
    if (lista.length === 0) return 0;
    let suma = 0;
    for (let num of lista) {
        suma += num;
    }
    return suma / lista.length;
}

console.log(calcularMedia([5, 10, 15])); // 10

// Dado un número, imprime su tabla del 1 al 10

function tablaMultiplicar(numero) {
    // Tu código aquí
    function tablaMultiplicar(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
 
}

tablaMultiplicar(5);