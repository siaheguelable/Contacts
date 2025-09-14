const routes = require('express').Router();
const userController = require('../Controllers/User');

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *   post:
 *     summary: Create a new user
 *     parameters:
 *       - in: body
 *         name: user
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             age:
 *               type: integer
 *     responses:
 *       200:
 *         description: User created
 *
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User found
 *   put:
 *     summary: Update user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *       - in: body
 *         name: user
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             email:
 *               type: string
 *             age:
 *               type: integer
 *     responses:
 *       200:
 *         description: User updated
 *   delete:
 *     summary: Delete user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: User deleted
 */

// Routes
routes.get('/', userController.getAllUsers);
routes.post('/', userController.createUser);
routes.get('/:id', userController.getUserById);
routes.put('/:id', userController.updateUser);
routes.delete('/:id', userController.deleteUser);

// Optional: delete all users
routes.delete('/', userController.deleteAllUsers);

module.exports = routes;
