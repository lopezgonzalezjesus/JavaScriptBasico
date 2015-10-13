var num1 = document.getElementById("numero1");
var num2 = document.getElementById("numero2");
var resultado = document.getElementById("resultado");

num1.addEventListener("input", suma);
num2.addEventListener("input", suma);

function suma() {
    var uno = parseFloat(num1.value) || 0;
    var dos = parseFloat(num2.value) || 0;

    resultado.innerHTML = "La suma es: " + (uno + dos);

}
