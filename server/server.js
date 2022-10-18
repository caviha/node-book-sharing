
const express = require('express');
const PORT = process.env.PORT || 5000;
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser')
const cors = require('cors');
const userRoutes = require('./routes/user');
const bookRoutes = require('./routes/bookRoute');
const mongoose = require('mongoose');
const CONNECTION_URL = "mongodb+srv://caviha:file13230@cluster0.elodhim.mongodb.net/?retryWrites=true&w=majority";
const app = express();


app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json());
app.use(cookieParser());

  
  app.use(cors());
  app.use(express.json());// allows us to handle incoming json data from the request body
app.use('/user', userRoutes);
app.use('/book', bookRoutes);
 





require('dotenv').config();


app.enable('trust proxy');


app.listen(PORT, ()=>{
  console.log("Server running on", PORT)
});
















 
