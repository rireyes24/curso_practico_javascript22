


function calcularPonderado()
{
    const examenes = [6, 7, 5, 7, 8, 6, 9];
    const credito =  [1, 1, 1, 1, 1, 1, 6];

   
    let valorAcumulado = 0;
    let totalCredito = 0;

    for(let i = 0; i < examenes.length; i++)
    {
        valorAcumulado = valorAcumulado + (examenes[i] * credito[i]);  
    }

    for(let i = 0; i < credito.length; i++)
    {
        totalCredito = totalCredito + credito[i];
    }

    const ponderado = valorAcumulado / totalCredito;

    return ponderado;
    
}