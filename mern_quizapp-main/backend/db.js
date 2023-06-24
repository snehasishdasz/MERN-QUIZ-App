const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://pnandashakti:123s5@cluster0.5y7r6cc.mongodb.net/?retryWrites=true&w=majority"
const mongoDB = () => {
    mongoose.connect(mongoURI,{useNewUrlParser: true,useUnifiedTopology: true});
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", async function () {
        console.log("db Connected successfully");
    });
}

module.exports = mongoDB