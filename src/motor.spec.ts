import { vi } from "vitest";
import { partida, EstadoPartida } from "./modelo";
import { checkearSiPuedeSeguirJugando, obtenerCartaAleatoria } from "./motor";

describe("checkearSiPuedeSeguirJugando", () => {
	it("debería devolver JUEGO_TERMINADO_PUNTUACION_EXACTA cuando la puntuacion sea 7.5.", () => {
		// Arrange
		const estadoEsperado: EstadoPartida =
			"JUEGO_TERMINADO_PUNTUACION_EXACTA";
		// No hace falta el spyOn en este caso, con poner un número cualquiera
		// como parámetro en checkearSiPuedeSeguirJugando(), serviría.
		// Esto está hecho así para mostrar que he entendido spyOn
		vi.spyOn(partida, "puntuacionTotal", "get").mockReturnValue(7.5);

		// Act
		const resultado = checkearSiPuedeSeguirJugando(partida.puntuacionTotal);

		// Assert
		expect(resultado).toBe(estadoEsperado);
	});

	it("debería devolver JUEGO_TERMINADO_PUNTUACION_SUPERIOR cuando la puntuacion sea MAYOR a 7.5.", () => {
		// Arrange
		const estadoEsperado: EstadoPartida =
			"JUEGO_TERMINADO_PUNTUACION_SUPERIOR";
		// No hace falta el spyOn en este caso, con poner un número cualquiera
		// como parámetro en checkearSiPuedeSeguirJugando(), serviría.
		// Esto está hecho así para mostrar que he entendido spyOn
		vi.spyOn(partida, "puntuacionTotal", "get").mockReturnValue(8);

		// Act
		const resultado = checkearSiPuedeSeguirJugando(partida.puntuacionTotal);

		// Assert
		expect(resultado).toBe(estadoEsperado);
	});

	it("debería devolver PUEDE_SEGUIR_JUGANDO cuando la puntuacion sea MENOR a 7.5.", () => {
		// Arrange
		const estadoEsperado: EstadoPartida = "PUEDE_SEGUIR_JUGANDO";
		// No hace falta el spyOn en este caso, con poner un número cualquiera
		// como parámetro en checkearSiPuedeSeguirJugando(), serviría.
		// Esto está hecho así para mostrar que he entendido spyOn
		vi.spyOn(partida, "puntuacionTotal", "get").mockReturnValue(7);

		// Act
		const resultado = checkearSiPuedeSeguirJugando(partida.puntuacionTotal);

		// Assert
		expect(resultado).toBe(estadoEsperado);
	});
});

describe("obtenerCartaAleatoria", () => {
	it("cuando Math ramdon es 0, debería obtener la carta 1", () => {
		// Arrange
		const cartaEsperada = 1;
		vi.spyOn(Math, "random").mockReturnValue(0);

		// Act
		const resultado = obtenerCartaAleatoria();

		// Assert
		expect(resultado).toBe(cartaEsperada);
	});

	it("cuando Math random es 0.9999 debería obtener la carta 12 ", () => {
		// Arrange
		const cartaEsperada = 12;
		vi.spyOn(Math, "random").mockReturnValue(0.9999);

		// Act
		const resultado = obtenerCartaAleatoria();

		// Assert
		expect(resultado).toBe(cartaEsperada);
	});

	it("cuando Math random es 0.66 debería obtener la carta 7 ", () => {
		// Arrange
		const cartaEsperada = 7;
		vi.spyOn(Math, "random").mockReturnValue(0.66);

		// Act
		const resultado = obtenerCartaAleatoria();

		// Assert
		expect(resultado).toBe(cartaEsperada);
	});

	it("cuando Math random es 0.7 debería obtener la carta 10 ", () => {
		// Arrange
		const cartaEsperada = 10;
		vi.spyOn(Math, "random").mockReturnValue(0.7);

		// Act
		const resultado = obtenerCartaAleatoria();

		// Assert
		expect(resultado).toBe(cartaEsperada);
	});
});
