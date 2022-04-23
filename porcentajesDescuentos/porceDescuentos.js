

function verificarCodigo()
{
    const cupones = ["Hola_Peter", "Soy_Batman", "this_is_the_way"];

    const inputPrecio = document.getElementById("inputPrecio");
    const inputPrecioValue = inputPrecio.value;    

    const inputCupon = document.getElementById("inputCupon");
    const inputCuponValue = inputCupon.value;
    
    switch(inputCuponValue)
    {
        case cupones[0]:      
            const resultado15 =  calcularDescuentos(inputPrecioValue, 15);  
            textoParrafo(resultado15);     
            break;
        case cupones[1]:
            const resultado50 = calcularDescuentos(inputPrecioValue, 50);  
            textoParrafo(resultado50);
            break; 
        case cupones[2]:
            const resultado100 = calcularDescuentos(inputPrecioValue, 100);          
            textoParrafo(resultado100);
            break;
        default:
            alert("Ingresa un codigo valido");
    }
}

function calcularDescuentos(precio, valorDescuento)
{
    const descuento  = (precio * (100 - valorDescuento)) / 100;
    return descuento;
}

function textoParrafo(resultadoDescuento)
{
    const resultadoParrado = document.getElementById("newPriceParrafo");
    resultadoParrado.innerText = "El nuevo precio de tu producto es de $" + resultadoDescuento;
    return resultadoParrado;
}

// HTML

function calcularPrecioDescuento()
{   
    verificarCodigo();
}
