function calcularPromedio(puntuaciones) {
    const suma = puntuaciones.reduce((total, puntaje) => total + puntaje, 0);
    return suma / puntuaciones.length;
}

function obtenerSubconjuntos(personas) {
    const subconjuntos = [];
    const n = personas.length;

    for (let i = 0; i < (1 << n); i++) {
        const subconjunto = [];
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subconjunto.push(personas[j]);
            }
        }
        subconjuntos.push(subconjunto);
    }

    return subconjuntos;
}

function dividirEquipos(personas) {
    const n = personas.length;
    const promedios = personas.map(persona => ({ nombre: persona.nombre, promedio: calcularPromedio(persona.puntuaciones) }));
    let menorDiferencia = Infinity;
    let mejorEquipo1 = [];
    let mejorEquipo2 = [];

    const subconjuntos = obtenerSubconjuntos(personas);

    subconjuntos.forEach(subconjunto => {
        const equipo1 = [];
        const equipo2 = [];

        for (let i = 0; i < n; i++) {
            if (subconjunto.includes(personas[i])) {
                equipo1.push(promedios[i]);
            } else {
                equipo2.push(promedios[i]);
            }
        }

        const sumaEquipo1 = equipo1.reduce((total, integrante) => total + integrante.promedio, 0);
        const sumaEquipo2 = equipo2.reduce((total, integrante) => total + integrante.promedio, 0);
        const diferencia = Math.abs(sumaEquipo1 - sumaEquipo2);

        if (diferencia < menorDiferencia) {
            menorDiferencia = diferencia;
            mejorEquipo1 = equipo1;
            mejorEquipo2 = equipo2;
        }
    });

    return { equipo1: mejorEquipo1, equipo2: mejorEquipo2 };
}

// Ejemplo de uso
const personas = [
    { nombre: 'Carlos', puntuaciones: [6, 8] },
    { nombre: 'Mariano', puntuaciones: [5, 9] },
    { nombre: 'Juan', puntuaciones: [4, 3] },
    { nombre: 'Ana', puntuaciones: [7, 8] },
    { nombre: 'Laura', puntuaciones: [6, 7] },
    { nombre: 'Pedro', puntuaciones: [8, 5] }
];

const equipos = dividirEquipos(personas);
// console.log("Equipo 1:", equipos.equipo1);
// console.log("Equipo 2:", equipos.equipo2);

export default equipos