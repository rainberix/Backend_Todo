const express = require("express");
const app = express();
require('dotenv').config();


app.use(express.json());

const todo_routes= require("./routes/todo_api");

app.use("/Todo",todo_routes)

//connect to Mongo db 
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(3000,() => console.log("Server listening at port 3000"));