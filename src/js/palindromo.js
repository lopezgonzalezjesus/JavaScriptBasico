/**
* Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo,
* es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo:
* "La ruta nos aporto otro paso natural".
* @author Jesus Lopez Gonzalez
* @version 1.0
*/

var cadena = prompt("Introduce una cadena");
var cadenaInvertida ="";
alert(esPalindromo(cadena));

/** 
* Funcion que comprueba si una cadena es un palindromo
* @param cadena Cadena que se va a comprobar
* @return Devuelve una cadena que indica si es un palindromo o no
*/
function esPalindromo(cadena) {
	//Ponemos la cadena en minuscula
	cadena = cadena.toLowerCase();

	//La convertimos a un array
	cadena = cadena.split("");

	//Le quitamos los espacios
	var cadenaSinEspacios = "";
  	for(i in cadena) {
    	if(cadena[i] != " ") {
      		cadenaSinEspacios += cadena[i];
   		}
 	}

 	//Invertimos la cadena
  	x = (cadenaSinEspacios.length -1);
 	while(x>=0){
 		cadenaInvertida = cadenaInvertida + cadenaSinEspacios.charAt(x);
 		x--;
 	}

 	//Comprobamos si son iguales las dos cadenas
 	iguales = true;
 	for (j=0;j<cadenaInvertida.length;j++){
 		if(cadenaInvertida.charAt(j)!=cadenaSinEspacios.charAt(j)){
 			return "No es un palindromo";
 		} else{
 			return "Es un palindromo";
 		}
 	}
}

