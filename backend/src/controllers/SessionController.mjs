import connection from '../database/connection.mjs'

class SessionController {
    async create(req, res) {
        const {id} = req.body
        const ong = await connection('ongs').where('id', id).select('name').first()

        if (!ong) {
            return res.status(404).json({error: `Ong ${id} not found.`})
        }
        return res.json(ong)
    }
}

export default new SessionController()
