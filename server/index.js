// import modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();


// app
const app = express();


// db


// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

// routes


// port
const port = process.env.PORT || 8080;  


// listener
app.listen(port, () => console.log(`Server is running on port ${port}`));