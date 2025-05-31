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