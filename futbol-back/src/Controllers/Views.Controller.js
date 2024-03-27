import algoritmo from '../services/algoritmo.js'

const home = async (req, res) => {
    const equipo1 = algoritmo.equipo1
    const equipo2 = algoritmo.equipo2
    res.send({ equipo1, equipo2 })
}

export default { home }