const {
    Professores,
    Sequelize
} = require('../models/')
const Op = Sequelize.Op

class ProfessorController {
    static async getAll(req, res) {
        try {
            const todosProfessores = await Professores.findAll()
            return res.status(200).json(todosProfessores)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async getOne(req, res) {
        const { id } = req.params
        try {
            const umProfessor = await Professores.findOne({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umProfessor)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async insert(req, res) {
        try {
            const novoProfessor = await Professores.create(req.body)
            return res.status(200).json(novoProfessor)
        } catch (error) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async delete(req, res) {
        try {
            const alvo = await Professores.findByPk(req.params.id)
            if (alvo) {
                await alvo.destroy()
                return res.status(204).json(alvo)
            } else {
                returns.status(400).json({
                    mensagem: "Professor não encontrado!"
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
            const alvo = await Professores.findByPk(req.params.id)
            if (alvo) {
                await alvo.update(req.body)
                return res.status(204).json(alvo)
            } else {
                return res.status(400).json({
                    mensagem: "Professor não encontrado"
                })
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    async getAllByName(req, res) {
        let nome = '%' + req.query.nome
        try {
            const professor = await Professores.findAll({
                where: {
                    nome: {
                        [Op.like]: nome
                    }
                }
            })
            return res.status(200).json(professor)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
}
module.exports = ProfessorController