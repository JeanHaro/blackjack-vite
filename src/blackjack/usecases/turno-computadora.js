import { 
    acumularPuntos, 
    crearCarta, 
    determinarGanador, 
    pedirCarta 
} from './index';

/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<number>} puntosJugadores  Recibe un array de los puntos de los jugadores
 * @param {Array<String>} deck 
 */
// Turno de la computadora
export const turnoComputadora = ( puntosMinimos, puntosJugadores, deck = [] ) => {
    if (!puntosMinimos) throw new Error('Puntos mínimos son necesarios');
    if (!deck) throw new Error('El Deck es necesario');

    let puntosComputadora = 0;
    
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(
            carta, 
            puntosJugadores.length - 1, 
            puntosJugadores
        );
        crearCarta(carta, puntosJugadores.length - 1);

        if (puntosMinimos > 21 || puntosComputadora === 21) {
            break; // cualquier carta que saque la computadora gana porque el jugador obtuvo más que 21
        }

    } while ( (puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21) );

    determinarGanador([puntosMinimos, puntosComputadora]);
}