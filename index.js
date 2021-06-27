const express = require('express')
const routes = require('./routes/routes')
const app = express()
// const swaggerUi = require('swagger-ui-express')
// const swaggerFile = require('./swagger_arquivo.json')

app.use(express.urlencoded({
    extended: false
}))
app.use(routes)

// app.use('/documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, ()=>{
    console.log('servidor funcionando')
})