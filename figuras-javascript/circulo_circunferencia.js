// Este codigo es para calcular la circunferencia de un circulo.

var diametro = prompt("Ingresa el diametro de tu Circulo");

function circunferencia_circulo(resultado)
{
    resultado = diametro * Math.PI;
    return console.log("La Circunferencia de tu Circulo es de " + resultado + "cm");
}

circunferencia_circulo();