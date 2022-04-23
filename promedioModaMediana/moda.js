

//Moda      (Es el elemento que mas se repite)
// 1, 10, 14, 3, 23, 14, 10, 35, 13, 14            En este caso el valor que mas se repite es 14


function calcularModa(lista)
{
    const lista1Count = {};

    // Aqui agregamos cuantas veces aparecen los numeros del array y los contamos y agregamos en el objeto lista1Count.
    lista.map(
    
        function(elemento)
        {
            if(lista1Count[elemento])
            {
                lista1Count[elemento] += 1; 
            }
            else
            {
                lista1Count[elemento] = 1;
            }        
        }        
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function(valorAcumulado, nuevoValor)
        {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1];

    return moda;
}





