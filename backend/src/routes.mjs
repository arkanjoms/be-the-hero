import express from 'express'

import OngController from './controllers/OngController.mjs'
import IncidentController from './controllers/IncidentController.mjs'
import ProfileController from './controllers/ProfileController.mjs'
import SessionController from './controllers/SessionController.mjs'

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.list)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.list)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.list)

export default routes
