const express = require('express');
const app = express(); // Create an instance of the Express application
const port= 5000;// Port on which the server will run
const bodyParser= require('body-parser');

//Import database config using Mongoose
const db = require('./config/mongoose');

// app.get("/", (req, res) => {
//     res.send("Hell0")
// })
// Middleware
app.use(bodyParser.json());

// middleware use express router
app.use('/', require('./routes/router'));

// Start the server and listen on the specified port
app.listen(port, function(err) {
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    // Server is running successfully
    console.log(`Backend is running on port : ${port}`);
});