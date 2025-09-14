const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API',
    description: 'API documentation generated with swagger-autogen',
  },
  host: process.env.RENDER_HOST || 'localhost:8080',
  schemes: process.env.RENDER_SCHEME ? [process.env.RENDER_SCHEME] : ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // entry point where your routes are defined

swaggerAutogen(outputFile, endpointsFiles, doc);
