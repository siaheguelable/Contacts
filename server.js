const express = require('express');
const connectDB = require('./DB/connection');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/user'); // lowercase 'user'
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const cors = require('cors');

connectDB();

const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Swagger docs
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Main routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
