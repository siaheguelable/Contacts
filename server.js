const express = require('express');
const connectDB = require('./DB/connection');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user'); // lowercase 'user'
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger docs route
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile)); // <-- only here

// main routes
app.use('/', indexRoutes);
app.use('/users', userRoutes); // all user CRUD routes handled here

// set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
