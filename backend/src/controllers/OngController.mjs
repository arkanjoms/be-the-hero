import connection from '../database/connection.mjs'
import uuid from 'uuid'

class OngController {
    async create(req, res) {
        const {name, email, whatsapp, city, uf} = req.body
        const id = uuid.v4()
        await connection('ongs').insert({id, name, email, whatsapp, city, uf})
        return res.json({id})
    }

    async list(req, res) {
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    }
}

export default new OngController()
