/*
 * Escribir el código de una función a la que se pasa como parámetro un número entero
 * y devuelve como resultado una cadena de texto que indica si el número es par o impar.
 * Mostrar por pantalla el resultado devuelto por la función.
 * @author Jesús López González
 * @version 1.0
 */

var numero = prompt("Introduce un numero entero");

document.write(parImpar(numero));

function parImpar(numero) {
	if(numero == 0){
		return "El numero es cero";
	}else if(numero % 2 ==0){
		return "El numero es par";
	}else{
		return "El numero es impar";
	}
}