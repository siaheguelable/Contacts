const express = require('express');
const router = express.Router();
// const userController = require('../Controllers/User');

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

// // Create a new user
// router.post('/', userController.createUser);

module.exports = router;
