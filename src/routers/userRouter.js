import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
      name: "Lucas Alves",
      Email: "LucasAlves@gmail.com",
      Avatar: "http://github.com/Luskahz.png"
    })
  })
  
router.post('/', (req, res) => {
  res.json({
    mensage: "Usuario Cadastrado com sucesso!",
    user: {
      name: "Lucas Alves",
      Email: "LucasAlves@gmail.com",
      Avatar: "http://github.com/Luskahz.png"
    }
      
  })
})

  export default router
  
  
  
  
