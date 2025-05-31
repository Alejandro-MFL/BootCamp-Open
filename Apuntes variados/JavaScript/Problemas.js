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