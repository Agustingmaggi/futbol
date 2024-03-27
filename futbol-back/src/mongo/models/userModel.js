import mongoose from "mongoose";

const collection = "Users"

const schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    puntaje: Number
})

const userModel = mongoose.model(collection, schema)

export default userModel