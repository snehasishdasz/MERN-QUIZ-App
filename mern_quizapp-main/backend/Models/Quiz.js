const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuizSchema = new Schema({
    quizname:{
        type: String,
        required: true
    },
    qno:{
        type: Number,
        required: true
    },
    question:{
        type: String,
        required: true
    },
    op1:{
        type: String
    },
    op2:{
        type: String
    },
    op3:{
        type: String
    },
    op4:{
        type: String
    },
    answer:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model("quiz",QuizSchema,'quizes');