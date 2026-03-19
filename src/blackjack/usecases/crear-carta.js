import { refs } from "./dom-referencias";

/**
 * Para crear la carta
 * @param {String} carta // La carta
 * @param {number} turno // El # del turno del jugador
 */
export const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.setAttribute('src', `./assets/img/${carta}.png`);
    refs.divCartasJugador[turno].appendChild(imgCarta);
}