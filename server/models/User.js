const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    _userId: Schema.Types.ObjectId,
    name: {
        firstName: { type: String, lowercase: true },
        lastName: { type: String, lowercase: true },
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    address: {
        street: { type: String, lowercase: true },
        state: { type: String, uppercase: true },
        postalCode: { type: Number},
        required: true,
    },
    joined: {
        type: Date,
        default: new Date,
    },
})

module.exports = mongoose.model("User", UserSchema);