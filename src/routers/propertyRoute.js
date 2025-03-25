import express from 'express'
import getPropertyController from '../controllers/property/getPropertyController.js'
import { createPropertyController } from '../controllers/property/createPropertyController.js'
import updatePropertyController from '../controllers/property/updatePropertyController.js'
import deletePropertyController from '../controllers/property/deletePropertyControler.js'
import updateTypePropertyController from '../controllers/property/updateTypePropertyController.js'
const router = express.Router()

router.get('/list', getPropertyController)
router.get('/:id'), ()=>{} //get de um unico property
router.post('/', createPropertyController)
router.put('/:id', updatePropertyController)
router.delete('/:id', deletePropertyController)
router.patch('/type', updateTypePropertyController)

  export default router
  
  
  
  
