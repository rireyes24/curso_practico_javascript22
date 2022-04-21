// Este codigo es para calcular el perimetro de un cuadrado.

var lado1 = prompt("Ingresa un lado de tu Triangulo");
var lado2 = prompt("Ingresa otro lado de tu Triangulo");
var base =  prompt("Ingresa la base de tu triangulo");

function perimetro_triangulo(resultado)
{
    resultado = Number(lado1) + Number(lado2) + Number(base);
    return console.log("El Perimetro de tu triangulo es de " + resultado + "cm");
}

perimetro_triangulo();