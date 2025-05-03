import express from 'express'
import getPropertyController from '../controllers/property/getPropertyController.js'
import createPropertyController from '../controllers/property/createPropertyController.js'
import updatePropertyController from '../controllers/property/updatePropertyController.js'
import deletePropertyController from '../controllers/property/deletePropertyController.js'
import changeTypePropertyController from '../controllers/property/changeTypePropertyController.js'

const router = express.Router()

router.get('/list', getPropertyController) // lista todo o conteudo
router.get('/:id', ()=>{}) // get de uma unica propriedade por id
router.post('/', createPropertyController) //cria uma propridade
router.put('/:id', updatePropertyController) //atualiza uma propriedade por completo com base no id
router.delete('/:id', deletePropertyController)//deleta uma propriedade por completo com base no id
router.patch('/type', changeTypePropertyController)// muda especificamente o type de uma propriedade

export default router
