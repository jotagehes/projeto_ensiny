const swaggerAutogen = require('swagger-autogen');

const outputFile = './swagger_arquivos.json';
const routes = ['./index.js'];
const docs = {
    
};

swaggerAutogen(outputFile, routes, docs).then(()=>{
    require('./index')
})