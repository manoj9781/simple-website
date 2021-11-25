const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
dotenv.config({ path: './config.env' });
require('./db/connection');

app.use(express.json());

app.use(require('./router/auth'));

const User = require('./models/userSchema');
app.use(cors());
const PORT = process.env.PORT;

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error in running the server', err);
  }
  console.log(`Server is running the on port ${PORT}`);
});
