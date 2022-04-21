
// Cuadrado
function perimetro_Cuadrado(ladoCuadrado)
{    
    return ladoCuadrado * 4;
}
function area_cuadrado(ladoCuadrado)
{
    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    return areaCuadrado;
}

// Triangulo Isoceles
function perimetro_triangulo(lado, base)
{
    const perimetroTriangulo = Number(lado) + Number(lado) + Number(base);
    return perimetroTriangulo;
}

function altura_triangulo(lado1, base)
{
    const mitadBase = base / 2;
    const alturaTriangulo = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(mitadBase, 2)));
    return alturaTriangulo;
}

function area_triangulo(lado1, base)
{   
    const mitadBase = base / 2;
    const alturaTriangulo = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(mitadBase, 2)));    
    
    const areaTriangulo = (base * alturaTriangulo) / 2;
    return areaTriangulo;
}



// Circulo
function circunferencia_circulo(radio)
{
    const diametro = radio * 2;
    const circunferenciaCirculo = diametro * Math.PI;
    return circunferenciaCirculo;
}
function area_circulo(radio)
{
    const circunferenciaCirculo = (radio * radio) *  Math.PI;
    return circunferenciaCirculo;
}



// Interaccion con HTML.

// Cuadrado
function calcularPerimetroCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetro_Cuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado()
{
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = area_cuadrado(value);
    alert("El Area de tu cuadrado es de " + area + "cm cuadrados");
}

// Triangulo
function calcularPerimetroTriangulo()
{
    const lado1 = document.getElementById("inputTrianguloLado1");
    const value1 = lado1.value;    
    const base = document.getElementById("inputTrianguloBase");
    const value3 = base.value;
    const perimetro = perimetro_triangulo(value1, value3);
    alert("El Perimetro de tu triangulo es de " + perimetro + "cm");
}

function calcularAreaTriangulo()
{
    const lado1 = document.getElementById("inputTrianguloLado1");
    const value1 = lado1.value;
    const base = document.getElementById("inputTrianguloBase");
    const value2 = base.value;
    
    const area = area_triangulo(value1, value2);
    alert("El Area de tu triangulo es de " + area + "cm cuadrados");
}

function calcularAlturaTriangulo()
{
    const lado1 = document.getElementById("inputTrianguloLado1");
    const value1 = lado1.value;
    const base = document.getElementById("inputTrianguloBase");
    const value2 = base.value;
    const altura = altura_triangulo(value1, value2);
    alert(altura);
}


// Circulo
function calcularCircunferenciaCirculo()
{
    const radio = document.getElementById("inputCirculoCircun");
    const value1 = radio.value;
    const circunferencia = circunferencia_circulo(value1);
    alert("La Circunferencia de tu Circulo es de " + circunferencia + "cm");
   
}
function calcularAreaferenciaCirculo()
{
    const radio = document.getElementById("inputCirculoCircun");
    const value1 = radio.value;
    const area = area_circulo(value1);
    alert("El Area de tu circula es de " + area + "cm cuadrados");   
}

