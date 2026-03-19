/**
 * Recibe la carta en formato String
 * @param {String} carta 
 * @returns - Retorna el valor de la carta 
 */
export const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1); // regresa un nuevo string cortado en base a la posición inicial y un final que podemos definir

    // Si el valor no es un número
    return ( isNaN(valor) ) ?  
                (valor === 'A') ? 11 : 10
                : valor * 1;
}