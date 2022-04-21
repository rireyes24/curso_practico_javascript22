// Este codigo es para calcular el area de un triangulo.

var base = prompt("Ingresa la base de tu Triangulo");
var altura = prompt("Ingresa la altura de tu Triangulo");


function area_triangulo(resultado)
{
    resultado = (base * altura) / 2;
    return console.log("El Area de tu triangulo es de " + resultado + "cm cuadrados");
}

area_triangulo();
