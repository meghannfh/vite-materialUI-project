//visit history
//date > required
//location > clinic name
//summary > user's take on what happend > required
//provider > doctor name
//image > optional
const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
    _incidentId: Schema.Types.ObjectId,
    incidentSummary: {
        type: String,
        required: true,
    },
    incidentLocation: {
        type: String,
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
    incidentDate: {
        type: Date,
        default: new Date,
    },
})

module.exports = mongoose.model("Card", CardSchema);