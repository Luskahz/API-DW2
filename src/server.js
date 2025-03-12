//importa o express
import express from 'express'
import userRouter from './routers/userRouter.js'
import propertyRouter from './routers/propertyRoute.js'
const app = express()
const port = 3000
// middleware
app.use(express.json())
app.use('/user', userRouter)
app.use('/property', propertyRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})