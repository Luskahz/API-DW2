import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        dados:{
            proprietario: "Lucas Alves",
            cep: "111111-11"
        }
        
    })
  })
  
router.post('/', (req, res) => {
  res.json({
    mensage: "Imovel cadastrado com sucesso",
    dados: {
        proprietario: "Lucas Alves",
        cep: "111111-11"
    }
      
  })
})

  export default router
  
  
  
  
