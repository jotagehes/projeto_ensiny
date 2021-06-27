const {
    Termo,
    Sequelize
} = require('../models')
const Op = Sequelize.Op

class TermoController {
    static async getOne(req, res) {
        try {
            const termos = await Termo.findAll()
            return res.status(200).json(termos)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async insert(req, res) {
        try {
            const novoTermo = await Termo.create(req.body)
            return res.status(200).json(novoTermo)
        } catch (error) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async delete(req, res) {
        try {
            const alvo = await Termo.findByPk(req.params.id)
            if (alvo) {
                await alvo.destroy()
                return res.status(204).json(alvo)
            } else {
                returns.status(400).json({
                    mensagem: "Desculpe, termo não disponível no momento"
                })
            }
        } catch (error) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async update(req, res) {
        try {
            const alvo = await Termo.findByPk(req.params.id)
            if (alvo) {
                await alvo.update(req.body)
                return res.status(204).json(alvo)
            } else {
                return res.status(400).json({
                    mensagem: "Desculpe, termo náo disponível no momento"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }

}
module.exports = TermoController