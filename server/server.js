const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const cardsRoutes = require("./routes/cards");
const userRoutes = require("./routes/main");
const historyRoutes = require("./routes/history");

require('dotenv').config({ path: './config/.env' });

const app = express();

//connect to Database
connectDB()

// //Handle cors error
app.use(cors())

//Body parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Set up routes for which server is listening
app.use('/cards', cardsRoutes);
app.use('/user', userRoutes);
app.use('/history', historyRoutes);
// app.use('/profilepic', profilepicRoutes)

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running`)
})


module.exports = app;