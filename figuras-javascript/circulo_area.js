// Este codigo es para calcular el area de un circulo

const radio = prompt("Ingresa el Radio de tu Circulo");


function area_circulo(resultado)
{
    resultado = (radio * radio) *  Math.PI;
    return console.log("El Area de tu circula es de " + resultado + "cm cuadrados");
}

area_circulo();