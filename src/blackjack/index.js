import _ from 'underscore';
import { crearDeck } from './usecases/crear-deck';
import { pedirCarta } from './usecases/pedir-carta';
import { valorCarta } from './usecases/valor-carta';

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

// Referencias del HTML
const btnPedir = document.getElementById('btnPedir'),
        btnDetener = document.getElementById('btnDetener'),
        btnNuevo = document.getElementById('btnNuevo');

const divCartasJugador = document.querySelectorAll('.divCartas'),
        puntajes = document.querySelectorAll('small');

// Esta función inicializa el juego
const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) puntosJugadores.push(0);

    puntajes.forEach(punto => punto.innerText = 0 );
    divCartasJugador.forEach( contenedor => contenedor.innerHTML = '' );

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

// Turno: 0 - primer jugador y el último será la computadora
const acumularPuntos = ( carta, turno ) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntajes[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}

const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.setAttribute('src', `./assets/img/${carta}.png`);
    divCartasJugador[turno].appendChild(imgCarta);
}

const determinarGanador = () => {
    const [ puntosMinimos, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Lo siento mucho, perdiste');
        } else if ( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else if ( puntosComputadora > puntosMinimos ) {
            alert ('Computadora Gana');
        }  
    }, 500);
}

// Turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {
    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
        crearCarta(carta, puntosJugadores.length - 1);

        if (puntosMinimos > 21 || puntosComputadora === 21) {
            break; // cualquier carta que saque la computadora gana porque el jugador obtuvo más que 21
        }

    } while ( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador();
}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }
})

btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});