const express = require('express');

const router = express.Router();
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
    }
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
  } catch (error) {
    console.log(error);
  }
});

//Sign in 
router.post('/signin', async(req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Please enter email and password" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);

    if (!userLogin) {
      return res.status(400).json({ eroor: "User not found" });
    }
    else {
      return res.status(200).json({ message: "User sign in succesfully" });
    }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
