const express = require('express');
const dotenv = require('dotenv');
const pool = require('./db');
const cookieParser = require('cookie-parser')

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cookieParser());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');    
})

const registerRoute = require("./auth/register")
app.use('/register' , registerRoute)

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})
