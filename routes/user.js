const routes = require('express').Router();
const userController = require('../Controllers/User');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   age:
 *                     type: integer
 *
 */

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
