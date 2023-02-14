const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const ConnectDb = require('./config/ConnectDb');

// config dotenv file
dotenv.config();

//database call
ConnectDb();


//rest object
const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json()); //overcome parser error


//port configuration
const PORT = process.env.PORT || 5500;

//listen server
app.listen(PORT, () => {
  console.log(`server running on ${process.env.NODE_ENV} and port ${PORT}`.bgGreen.white);
});


/**
 * START of Routing
 */
const endPoint = process.env.API_END_POINT;
// user routes
app.use(endPoint + 'users', require('./routes/UserRoutes'));

/**
 * END of Routing section
 */