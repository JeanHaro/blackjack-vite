
/**
 * Pedir una carta del deck
 * @param {Array<String>} deck 
 * @returns - Retorna la carta y elimina la carta entregada
 */
// Tomar una carta
export const pedirCarta = (deck) => {
    if (deck.length === 0)  throw 'No hay cartas en el deck';

    let carta = deck[Math.round(Math.random() * (deck.length - 1))]; // Elegimos una carta en una posición aleatoria

    let cartaIndex = deck.findIndex((item) => item === carta); // Buscamos el indice en que está posicionado la carta

    deck.splice(cartaIndex, 1); // Eliminamos la carta indicando su posición ubicada

    return carta;
}
