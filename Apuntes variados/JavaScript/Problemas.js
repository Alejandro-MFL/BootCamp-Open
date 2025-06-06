//Ejercicios practicos Curso https://www.aprendejavascript.dev/

/* M�todos y propiedades de Array
 
 En un restaurante se reciben pedidos de comida a domicilio. Vamos a escribir una funci�n procesarPedido que recibe un pedido, que es un array de platos. Lo que debemos hacer es:
 -El primer elemento lo sacamos del array, ya que es el nombre del cliente.
 -A�adimos al principio del array la cadena de texto "bebida", ya que es una promoci�n que tenemos.
 -Despu�s a�adimos al final del array el nombre del usuario que sacamos antes.
Recuerda que debes devolver el array modificado:
 */

function procesarPedido(pedidos) {
    const nombreCliente = pedidos.shift()
    pedidos.unshift("bebida")
    pedidos.push(nombreCliente)

    return pedidos
}

/* Iteraci�n de Arrays en JavaScript
 
 Dada una lista de n�meros, escribe una funci�n en JavaScript que devuelva la suma de todos los n�meros pares en la lista. 
 La funci�n deber� iterar sobre cada n�mero en la lista, comprobar si el n�mero es par y, si es as�, a�adirlo a la suma total. Usa el bucle que quieras para solucionarlo. 
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
/* B�squeda en Arrays con sus m�todos
 
 Crear una funci�n que reciba un array de palabras y devuelva true si todas las palabras terminan con la letra "a" y false si al menos una palabra no termina con la letra "a".
Usa el m�todo endsWith() de string para resolverlo.
 */

function acabanEnA(words) {
    const comprobacion = words.every(word => word.endsWith("a"))
    return comprobacion
}
/*Ordenamiento de Arrays en JavaScript
 
 Recibes una lista de n�meros. Debes ordenar los n�meros de menor a mayor seg�n su valor absoluto. Eso quiere decir que los n�meros negativos pierden el signo y se ordenan como si fueran positivos.
Por ejemplo, si recibes [5, -10, -2, -25, -7] deber�as devolver [-2, 5, -7, -10, -25].
Puedes usar el m�todo Math.abs(num) para obtener el valor absoluto de un n�mero.
 */
function sortAbsoluteNumbers(numbers) {
    numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
    return numbers
}
/*Transformaci�n de Arrays en JavaScript

Recibes dos par�metros: una lista de palabras words y una palabra word. Primero, busca el �ndice de la palabra en la lista.
Despu�s, usa ese �ndice (que ser� un n�mero) y devuelve todas las palabras de words que sean m�s largas (length) que el n�mero del �ndice.
Ten en cuenta que la palabra word siempre existir� en el array, por lo que no es necesario comprobar si existe o no.
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
 
 Recibimos una matriz de cadenas de texto. Tenemos que localizar la posici�n de la palabra "JavaScript" en la matriz y devolver su posici�n como un array de dos elementos:
 el �ndice de la fila y el �ndice de la columna.

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]

Si no encuentra la palabra debe devolver [-1, -1].
 */

//Usando for of por practicar aunque no es ideal por no poder usar �ndices
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
 
 En una biblioteca queremos saber qu� libro es el que menos p�ginas tiene y el que m�s p�ginas. Por suerte, no hay dos libros con el mismo n�mero de p�ginas.
Necesitamos que la funci�n reciba un array de n�meros, sin ordenar, y que devuelva un array de dos posiciones con el �ndice del libro con menos p�ginas y el �ndice del libro con m�s p�ginas.
 */

//Usando metodos, pocas lineas y facil de leer. Problema: Recorre demasiadas veces el array
function minAndMaxWord(words) {
    const libroGrande = Math.max(...words)
    const libroPeque�o = Math.min(...words)
    const indexPeque�o = words.indexOf(libroPeque�o)
    const indexGrande = words.indexOf(libroGrande)
    return [indexPeque�o, indexGrande]
}

//Reduciendo la complejidad logar�tmica

function minAndMaxWord(words) {
    let indexPeque�o = 0
    let indexGrande = 0
    for (let i = 1; i < words.length; i++) {
        if (words[i] > words[indexGrande]) { indexGrande = i }
        if (words[i] < words[indexPeque�o]) { indexPeque�o = i }
    }
    return [indexPeque�o,indexGrande]
}
/*Objetos
 
 Tenemos una funci�n que recibe dos par�metros. name y subs. Haz que la funci�n devuelva un objeto con la siguiente informaci�n:

 -name con el valor del par�metro name
 -subscribers con el valor del par�metro subs
 -hash, con el valor de la longitud del string name multiplicado por el par�metro subs
 -Un m�todo getStatus que devuelva el texto El canal de <name> tiene <subs> suscriptores. Por ejemplo, para name = 'Dani' y subs = 100, el m�todo getStatus devolver�a El canal de Dani tiene 100 suscriptores.
�Ojo! El m�todo getStatus debe devolver el texto, NO imprimirlo por consola.
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
 
 Tienes una funci�n que recibe un objeto como par�metro. La funci�n debe retornar un array con el nombre de las propiedades que su tipo sea boolean.
Por ejemplo, para el objeto { a: true, b: 42, c: false } la funci�n debe retornar ['a', 'c'] ya que son las dos propiedades que tienen valores booleanos.
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
 
 Somos un equipo de submarinistas. Estamos explorando el fondo marino pero no sabemos qu� nos vamos a encontrar porque vamos casi a ciegas. Vamos con un peque�o robot y funciona con un programa que recibe tres par�metros:

-Un objeto con la informaci�n del fondo marino
-Una cadena de texto con el nombre del lugar que queremos explorar
-Una cadena de texto con el nombre del objeto que queremos encontrar

Por ejemplo. Con el objeto ocean que nos llega como primer par�metro, podemos explorar el lugar deep y buscar el objeto treasure. As� que intentar�amos acceder a ocean.deep.treasure.
Si lo encontramos el robot nos devuelve true y si no lo encuentra nos devuelve false. S�lo necesitamos saber si lo hemos encontrado o no, no necesitamos saber su valor.
Vamos a necesitar asegurarnos que el robot no se rompa, que cuesta mucho dinero, en el caso que no pueda encontrar el lugar o el objeto que le hemos pedido.
As� que vamos a usar el operador de encadenamiento opcional para evitar errores.
Pista: �Recuerda que en una clase anterior hemos visto c�mo podemos acceder a una propiedad de un objeto usando una variable! 
Por ejemplo, si tenemos un objeto person y una variable key con el valor name, podemos acceder a la propiedad name del objeto person usando person[key] y ser�a como hacer person.name.
 */

function searchInOcean(ocean, section, item) {
    return ocean[section]?.[item] !== undefined;
}

/*
 *
 Vamos a experimentar con valor y referencia. Tienes una funci�n updateStats que recibe dos argumentos: un n�mero level y un objeto character.
Dentro de la funci�n:
Incrementa el level en 1. Cambia la propiedad status del objeto character a 'active'. Fuera de la funci�n:
Declara una variable currentLevel inicializada en 5. Declara un objeto player con las propiedades name:
'Hero' y status: 'inactive'. Llama a updateStats pas�ndole currentLevel y player. 
Imprime por consola el valor de currentLevel y el objeto player despu�s de llamar a la funci�n. Observa qu� valores han cambiado y cu�les no. La funci�n debe devolver el objeto character modificado.
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

// Dado el siguiente array, suma solo los n�meros pares
const numeros = [1, 4, 7, 10, 13, 16];

let sumaPares = 0;
// Tu c�digo aqu�
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i];
    }
}

console.log("Suma de pares:", sumaPares);

// Escribe una funci�n que reciba una frase y una letra, y cuente cu�ntas veces aparece esa letra

function contarLetra(frase, letra) {
    // Tu c�digo aqu�
    let contador = 0;
    for (let char of frase) {
        if (char.toLowerCase() === letra.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}

console.log(contarLetra("Javascript es genial", "a")); // Deber�a devolver 3

// Una palabra pal�ndroma se lee igual al derecho que al rev�s
// Ejemplo: "oso", "reconocer"

function esPalindromo(palabra) {
    // Tu c�digo aqu�
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
    { nombre: "Luc�a", edad: 30 }
];

// Tu c�digo aqu�
const mayores = personas.filter(persona => persona.edad >= 18);

console.log(mayores); // [{nombre: "Luis", edad: 22}, {nombre: "Luc�a", edad: 30}]
// Escribe una funci�n que reemplace todas las ocurrencias de una palabra por otra

function reemplazar(frase, palabraOriginal, palabraNueva) {
    // Tu c�digo aqu�
    return frase.split(palabraOriginal).join(palabraNueva);
}

console.log(reemplazar("Me gusta el chocolate", "chocolate", "helado"));
// "Me gusta el helado"

// Crea una funci�n que calcule la media de una lista de n�meros

function calcularMedia(lista) {
    // Tu c�digo aqu�
    if (lista.length === 0) return 0;
    let suma = 0;
    for (let num of lista) {
        suma += num;
    }
    return suma / lista.length;
}

console.log(calcularMedia([5, 10, 15])); // 10

// Dado un n�mero, imprime su tabla del 1 al 10

function tablaMultiplicar(numero) {
    // Tu c�digo aqu�
    function tablaMultiplicar(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    }
 
}

tablaMultiplicar(5);