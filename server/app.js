const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' });
require('./db/connection');


app.use(express.json());

app.use(require('./router/auth'));
const User = require('./models/userSchema');
const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error in running the server', err);
  }
  console.log(`Server is running the on port ${PORT}`);
});
