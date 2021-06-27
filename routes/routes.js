const {
    Router
} = require('express')
const PessoasController = require('../controllers/PessoaController')
const ProfessorController = require('../controllers/ProfessorController')
const AvaliacaoController = require('../controllers/AvalicaoController')
const TermoController = require('../controllers/TermoController')
const routes = Router()

routes
    .get('/pessoas/:id', PessoasController.getAll)
    .get('/pessoas/:id', PessoasController.getOne)
    .post('/pessoas/:id', PessoasController.insert)
    .delete('/pessoas/:id', PessoasController.delete)
    .patch('/pessoas/:id', PessoasController.update)
    .get('/professor/:id', ProfessorController.getOne)
    .post('/professor/:id', ProfessorController.insert)
    .delete('/professor/:id', ProfessorController.delete)
    .patch('/professor/:id', ProfessorController.update)
    .get('/avaliacao/:id', AvaliacaoController.buscaAvalicao)
    .post('/avaliacao/:id', AvaliacaoController.insert)
    .get('/termo/:id', TermoController.getOne)
    .post('/termo/:id', TermoController.insert)
    .delete('/termo/:id', TermoController.delete)
    .patch('/termo/:id', TermoController.update)

module.exports = routes