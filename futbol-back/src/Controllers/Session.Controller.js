import userManager from "../mongo/managers/userManager.js"

const user = new userManager()

const register = async (req, res) => {
    const { email, password } = req.body
    const newUser = { email, password }
    const usuario = await user.createUser(newUser)
    res.status(200).send(`User created: ${usuario}`)

}

export default { register }