function anade(){

	//Seleccionamos el elemento lista
	var lista = document.getElementById("lista");
	
	//Creamos el elemento lista
	var elemento = document.createElement("li");
	
	//Creamos el texto que añadiremos al elemento lista
	var texto = document.createTextNode("Nuevo elemento de lista");
	
	//Añadimos el texto al elemento de la lista
	elemento.appendChild(texto);
	
	//Añadimos el elemento a la lista
	lista.appendChild(elemento);
	
	//Otra forma de añadir elementos directamente con una cadena de texto en formato html
	var nuevoElemento = "<li>Texto de prueba2</li>";
  	lista.innerHTML = lista.innerHTML + nuevoElemento;
}	