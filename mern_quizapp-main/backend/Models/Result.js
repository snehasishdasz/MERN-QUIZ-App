const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResultSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    score:{
        type: Number,
        required: true
    },
    quizname:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("result",ResultSchema);