window.onload = function() {

	//Número de enlaces de la página
	var enlaces = document.getElementsByTagName("a");
	var contador = 0;
	var parrafos = document.getElementsByTagName("p");
	
	console.log("Numero de enlaces de la página: " + enlaces.length);

	//Dirección a la que enlaza el penúltimo enlace
	console.log("Dirección a la que enlaza el penúltimo enlace : " + enlaces[enlaces.length-2].href);

	//Numero de enlaces que enlazan a http://prueba/
	for (var i = 0; i<enlaces.length; i++){
		if(enlaces[i].href == "http://prueba/")
			contador++;
	}
	console.log("Número de enlaces que llevan a http://prueba/ : " + contador);

	
	//Número de enlaces del tercer párrafo
	var enlacesTercerParrafo = parrafos[2].getElementsByTagName("a");
	console.log("Enlaces del tercer párrafo : " + enlacesTercerParrafo.length);
}
