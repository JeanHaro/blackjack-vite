import _ from 'underscore';

// Crea una nueva baraja
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    let deck = [];


    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let especial of tiposEspeciales) {
            deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}

// export default crearDeck;