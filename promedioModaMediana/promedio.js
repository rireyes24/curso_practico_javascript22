
//Con esta funcion podemos calcular la Media Aritmetica.
function calcularMediaAritmetica(lista)
{
    //const totalLista = lista.length;
    //let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++)
    // {
    //     sumaLista = sumaLista + lista[i];
    // }

    // const mediaAritme = sumaLista / totalLista;

    // return mediaAritme;

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );

    const totalLista = lista.length;
    
    const mediaAritme = sumaLista / totalLista;
    return mediaAritme;

}

// calcularMediaAritmetica();







// Media aritmetica
// venta1 + venta2 + venta3 / Cantidad de ventas

//Mediana 
// 450     |500|     600
// Sueldo1  |Sueldo2   Sueldo3|   Sueldo4
//          (Sueldo2 + Sueldo3) / 2


//Moda      (Es el elemento que mas se repite)
// 1, 10, 14, 3, 23, 14, 10, 35, 13, 14            En este caso el valor que mas se repite es 14
