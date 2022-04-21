// Este codigo es para calcular el perimetro de un cuadrado.

var lado = prompt("Ingresa un lado de tu cuadrado");
var nLados = 4 ;

function perimetro_Cuadrado(resultado)
{
    resultado = lado * nLados;
    return console.log("El Perimetro de tu cuadrado es de " + resultado + "cm");
}

perimetro_Cuadrados();