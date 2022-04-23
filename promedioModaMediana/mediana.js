
const lista = [100, 200, 500, 40000000];

const mitadLista1 = parseInt(lista.length / 2);

function esPar(numerito)
{
    if(numerito % 2 === 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}


function calcularMediaAritmetica(lista)
{
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const mediaAritme = sumaLista / mitadLista1;
    return mediaAritme;
}

let mediana;

if(esPar(lista.length))
{
    const elemento1 = lista[mitadLista1 - 1];
    const elemento2 = lista[mitadLista1];

    const promedioMediana = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioMediana;
} 
else
{
    mediana = lista[mitadLista1];
}

