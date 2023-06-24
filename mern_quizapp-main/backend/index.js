const cors = require("cors");
const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
const bodyParser = require('body-parser');

// cors
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());


mongoDB();
app.get('/', (req, res) => {
  res.send('Hello World--works!')
})
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use("/api", require('./Routes/Auth'))
app.use("/api", require('./Routes/Quiz'))
app.use("/api", require('./Routes/Result'))


app.listen(port, () => {
  console.log(`listening on port ${port}`)
})