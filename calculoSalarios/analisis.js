
//divide los valores de lista obejto
const salarioCL = colombia.map(
    function(personas)
    {
        return personas.salario;
    }
);

//Ordena los salarios con .sort()
const salariosCLSort = salarioCL.sort(
    function(salarioA, salarioB)
    {
        return salarioA - salarioB;
    }
)

//verifica si el numero de salarios es par o impar.
function esPar(numero)
{
    if(numero % 2 === 0)
    {
        return true;
    }    
    else
    {
        return false;
    }
}

//Calcula la media aritmetica de la lista
function calcularMediaAritmetica(lista)
{  
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento)
        {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const mediaAritme = sumaLista / lista;
    return mediaAritme;
}

function medianaSalarios(lista)
{
    const mitad = parseInt(lista.length / 2);
    
    if(esPar(lista.length))
    {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];


        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    }
    else
    {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

const mediaGeneralCL = medianaSalarios(salariosCLSort);

// Mediana del top 10%

const spliceStart = (salariosCLSort.length  * 90) / 100;
const spliceCount = salariosCLSort.length - spliceStart;

const salariosCLTop10 = salariosCLSort.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10CL = medianaSalarios(salariosCLTop10);

console.log({
    mediaGeneralCL,
    medianaTop10CL,
});