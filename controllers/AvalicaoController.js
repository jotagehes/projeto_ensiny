const {
    Avalicao,
    Sequelize
} = require('../models')
const Op = Sequelize.Op


class AvalicaoController {
    static async buscaAvalicao(req, res) {
        try {
            const avaliacao = await Avalicao.findALL()
            return res.status(200).json(avaliacao)
        } catch (erro) {
            return res.status(400).json({
                erro: erro.message
            })
        }
    }
    static async insert(req, res) {
        try {
            const novaAvaliacao = await Avaliacao.create(req.body)
            return res.status(200).json(novaAvaliacao)
        } catch (error) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}

module.exports = AvalicaoController