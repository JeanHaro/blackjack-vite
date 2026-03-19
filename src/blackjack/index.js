import _ from 'underscore';
/* import { crearDeck } from './usecases/crear-deck';
import { pedirCarta } from './usecases/pedir-carta';
import { valorCarta } from './usecases/valor-carta'; */
import { 
    crearDeck, 
    pedirCarta, 
    acumularPuntos, 
    turnoComputadora, 
    crearCarta,
    refs
} from './usecases';

/**
 * 2C = 2 de tréboles
 * 2D = 2 de diamantes
 * 2H = 2 de corazones
 * 2S = 2 de espadas
 */

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = []; // 2 jugadores por la cantidad de 0


// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    // puntosJugadores = [];
    // for (let i = 0; i < numJugadores; i++) puntosJugadores.push(0);
    puntosJugadores = Array(numJugadores).fill(0); // Lo mismo que arriba

    refs.puntajes.forEach( punto => punto.innerText = 0 );
    refs.divCartasJugador.forEach( contenedor => contenedor.innerHTML = '' );

    refs.btnPedir.disabled = false;
    refs.btnDetener.disabled = false;
}

// Eventos
refs.btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);

    crearCarta(carta, 0);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');

        refs.btnPedir.disabled = true;
        refs.btnDetener.disabled = true;
        
        turnoComputadora(puntosJugador, puntosJugadores, deck);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        
        refs.btnPedir.disabled = true;
        refs.btnDetener.disabled = true;
        
        turnoComputadora(puntosJugador, puntosJugadores, deck);
    }
})

refs.btnDetener.addEventListener('click', () => {
    refs.btnPedir.disabled = true;
    refs.btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0], puntosJugadores, deck);
});

refs.btnNuevo.addEventListener('click', () => inicializarJuego());