const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authenticate = require('../middleware/authenticate');

const DB = require('../db/connection');
const User = require('../models/userSchema');
router.get('/', (req, res) => {
  res.send('Hello Manoj singh Rana');
});

//Using Promises
// router.post('/register', (req, res) => {
//   const { name, email, phone, work, password, confirm_password } = req.body;

//   if (!name || !email || !phone || !work || !password || !confirm_password) {
//     return res.status(422).json({ error: 'Filled all field' });
//   }

//   User.findOne({ email: email })
//     .then((userExist) => {
//       if (userExist) {
//         return res.status(422).json({ error: 'Email already exist' });
//       }
//       const user = new User({
//         name,
//         email,
//         phone,
//         work,
//         password,
//         confirm_password,
//       });

//       user
//         .save()
//         .then(() => {
//           res.status(201).json({ message: 'User registered succesfully' });
//         })
//         .catch((error) => {
//           res.status(500).json({ error: 'Failed to registered', error });
//         });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// Using Async await
router.post('/register', async (req, res) => {
  const { name, email, phone, work, password, confirm_password } = req.body;

  if (!name || !email || !phone || !work || !password || !confirm_password) {
    return res.status(422).json({ error: 'Filled all field' });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' });
    } else if (password != confirm_password) {
      return res
        .status(422)
        .json({ error: 'Password and confirm password shloud be equal' });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        confirm_password,
      });
      await user.save();
      return res.status(201).json({ message: 'User registered succesfully' });
    }
  } catch (error) {
    console.log(error);
  }
});

//Sign in

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter email and password' });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const userFound = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);

       res.cookie('jwtToken', token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!userFound) {
        return res.status(400).json({ error: 'User not found' });
      } else {
        return res.status(200).json({ message: 'User sign in succesfully' });
      }
     
    } else {
      return res.status(400).json({ error: 'Invalid credientials' });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get('/about', authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
})

router.get('/contact', authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("Error in constact form");
      return res.json({ error: "Please fill the require field" });
    }

    const userContact = await User.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, phone, message);
    }

  } catch (error) {
    console.log("Error", error);
  }
})

module.exports = router;
