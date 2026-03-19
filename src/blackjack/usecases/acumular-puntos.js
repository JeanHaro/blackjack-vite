
import { valorCarta } from "./valor-carta";
import { refs } from "./dom-referencias";

/**
 * Acumular los puntos
 * @param {String} carta 
 * @param {number} turno 
 * @param {Array<number>} puntosJugadores Recibe el Array de los puntos de los jugadores
 * @returns  - Retorna los puntos del jugador depende del turno
 */
// Turno: 0 - primer jugador y el último será la computadora
export const acumularPuntos = ( carta, turno, puntosJugadores = [] ) => {
    puntosJugadores[turno] += valorCarta(carta);
    refs.puntajes[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}