export const partida = {
	puntuacionTotal: 0,
};

export type EstadoPartida =
	| "JUEGO_TERMINADO_PUNTUACION_SUPERIOR"
	| "JUEGO_TERMINADO_PUNTUACION_EXACTA"
	| "PUEDE_SEGUIR_JUGANDO";
