const { Router } = require('express')
const PessoasController = require('../controllers/PessoasController')
const routes = Router()

routes
    .get('/pessoas/:id', PessoasController.getOne)
    .post('/pessas', PessoasController.insert)
    .delete('/pessoas/:id', PessoasController.delete)
    .patch('/pessoas/:id', PessoasController.update)


module.exports = routes