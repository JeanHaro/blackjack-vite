/**
 * 
 * @param {Array<number>} puntosJugadores // Obtiene un array de los puntos de cada jugador
 */
export const determinarGanador = (puntosJugadores) => {
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