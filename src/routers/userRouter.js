import express from 'express'
import getUserController from '../controllers/user/getUserController.js'
import createUserController from '../controllers/user/createUserController.js'
const router = express.Router()

router.get('/:id/:nome', getUserController)
router.post('/', createUserController)

export default router
  
  
  
  
