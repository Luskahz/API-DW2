import express from 'express'
import getUserController from '../controllers/user/getUserController.js'
import createUserController from '../controllers/user/createUserController.js'

const propertyRouter = express.Router()

router.get('/:id', getUserController)
router.post('/', createUserController)
//...continua

export default propertyRouter