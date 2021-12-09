import { Router } from 'express'
import ClinicsController from '../controllers/ClinicController'

const routes = Router()

routes.get('/clinics/:address', ClinicsController.findByAddress)
routes.get('/clinics', ClinicsController.find)
routes.post('/clinics', ClinicsController.create)
routes.put('/clinics', ClinicsController.update)
routes.delete('/clinics', ClinicsController.delete)

export default routes