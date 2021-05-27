const { Avalicao, Sequelize } = require('../models')
const Op = Sequelize.Op


class AvalicaoController {
    static async buscasAvalicao(req, res) {
        try {
            const avaliacao = await Avalicao.findALL()
            return res.status(200).json(avaliacao)
        } catch (erro) {
            return res.status(400).json({
                erro: erro.message
            })
        }
    }

}

module.exports = AvalicaoController