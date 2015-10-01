/**
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por
 * mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 * @author Jesús López González
 * @version 1.0
 */

 var cadena = prompt("Introduce una cadena");

 function infoCadena(cadena){
 	if(cadena == cadena.toUpperCase()) {
 		return "La cadena es toda en mayusculas";
 	} else if (cadena == cadena.toLowerCase()) {
 		return "La cadena es toda en minusculas";
 	} else {
 		return "La cadena esta formada por mayusculas y minusculas";
 	}
 }

 document.write(infoCadena(cadena));