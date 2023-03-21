const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    subscriberName: {
        type: String,
        required: true,
    },
    providerName: {
        type: String,
        required: true,
    },
    providerId: {
        type: Number,
        required: true,
    },
    memberId: {
        type: String,
        required: true,
    },
    employer: {
        type: String,
        required: false,
    },
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    // },
    createdAt: {
        type: Date,
        default: new Date,
    },
})

module.exports = mongoose.model("Card", CardSchema);