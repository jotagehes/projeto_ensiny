const { Pessoa, sequelize } = require('../models')
const Op = Sequelize.Op

class PessoasController {
    static async buscasPessoas(req, res) {
        try {
            const pessoa = await Pessoa.findALL()
            return res.status(200).json(pessoas)
        } catch (erro) {
            return res.status(400).json({
                erro: erro.message
            })
        }
    }

    static async inserirpessoa(req, res) {
        try {
            const novaPessoa = await Pessoa.create(req.body)
            return res.status(201).json(novaPessoa)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }

    }

    static async alterarPessoa(req, res) {
        try {
            const alterarPessoa = await Pessoa.findByPk(req.body.id)
            if (!alterarPessoa) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await alterarPessoa.update(req.body)
                return res.status(204).json(alterarPessoa)
            }
        } catch (error) {
            return res.status(400).json({
                error: erro.message
            })

        }
    }

    static async excluirPessoa(req, res) {
        try {
            const excluirPessoa = await Pessoa.findByPk(req.body.id)
            if (!exlcuirPessoa) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await excluirPessoa.destroy()
                return res.status(204).json(excluirPessoa)
            }
        } catch (error) {

        }
    }
    static async encontrarPessoa(req, res) {
        const { id } = req.params
        try {
            const pessoa = await Pessoa.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoa)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}

module.exports = PessoasController