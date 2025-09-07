const routes = require('express').Router();
const userController = require('../Controllers/User');

// Get all users
routes.get('/', userController.getAllUsers);

// Update a user by id
routes.put('/users/:id', userController.updateUser);

// Delete a user by id
routes.delete('/:id', userController.deleteUser);

// Get a user by id
routes.get('/:id', userController.getUserById);

// Create a new user
routes.post('/', userController.createUser); // <-- Make sure this exists!

module.exports = routes;
