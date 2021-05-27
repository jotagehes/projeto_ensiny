const { Termo, sequelize } = require('../models')
const Op = Sequelize.Op

class TermoController {
    static async getAll(req, res) {
        try {
            const termos = await Termo.findAll()
            return res.status(200).json(termos)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}
module.exports = TermoController