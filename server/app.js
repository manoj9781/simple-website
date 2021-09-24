const express = require('express');
const app = express();
const mongoose = require('mongoose');

const db ='mongodb+srv://manoj:e1aNan37vnmyViT2@cluster0.ik87j.mongodb.net/mern_development?retryWrites=true&w=majority';

mongoose
  .connect(db)
  .then(() => {
    console.log('connection succesful');
  })
  .catch((err) => {
    console.log(`Not connected`, err);
  });

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

app.listen(3000, (err) => {
  if (err) {
    console.log('Error in running the server', err);
  }
  console.log(`Server is running the on port `);
});
