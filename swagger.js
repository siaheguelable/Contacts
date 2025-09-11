const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation generated with swagger-autogen',
  },
  host: 'localhost:8080', // change if you deploy
  schemes: ['http'], // add 'https' if needed
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // entry point where your routes are defined

swaggerAutogen(outputFile, endpointsFiles, doc);
// Run "node swagger.js" to generate the swagger-output.json file
// Then run "nodemon index.js" to start the server
// Make sure to install swagger-ui-express and set it up in your index.js to serve the documentation
// Example setup in index.js:
/*
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
*/
