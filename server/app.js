const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
require('./db/connection');

const PORT = process.env.PORT;

const middleware = (req, res, next) => {
  console.log('Hello Middleware');
  next();
};
app.get('/', (req, res) => {
  res.send('Hello from the server');
});
app.get('/contact', (req, res) => {
  res.send('Hello from the Contact');
});
app.get('/about', middleware, (req, res) => {
  console.log(`After middleware`);
  res.send('Hello from the About');
});
app.get('/signin', (req, res) => {
  res.send('Hello from the Sign-In');
});
app.get('/signup', (req, res) => {
  res.send('Hello from the Sign-Up');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log('Error in running the server', err);
  }
  console.log(`Server is running the on port ${PORT}`);
});
