// Este codigo es para calcular el area de un cuadrado.

var ladoCuadrado = prompt("Ingresa el lado de tu cuadrado");

function cuadrado_area(resultado)
{
    resultado = ladoCuadrado * ladoCuadrado;
    return console.log("El Area de tu cuadrado es de " + resultado + "cm cuadrados");
}

cuadrado_area();