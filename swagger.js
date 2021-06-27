const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_arquivos.json';
const routes = ['./index.js'];
const docs = {
    "swagger": "2.0",
    "info": {
      "version": "4.4.2",
      "title": "ENSINY API",
      "description": "API de interação sistema ENSINY - ® all rights reserved -"
    },
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [],
    "schemes": [
      "http",
      "htpps"
    ],
};

swaggerAutogen(outputFile, routes, docs).then(()=>{
    require('./index')
})