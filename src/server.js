//importa o express
import express from 'express'
import userRouter from './routers/userRouter.js'
import imovelRouter from './routers/imovelRoute.js'
const app = express()
const port = 3000

app.use('/user', userRouter)
app.use('/imovel', imovelRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})