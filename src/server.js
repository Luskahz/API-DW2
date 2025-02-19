//importa o express
const express = require('express')
const app = express()
const port = 3000



app.get('/produto', (req, res) => {// obter dados
  res.send('produto solicitado')
})
app.put('/produto', (req, res) => {// obter dados
    res.send('produto alterado')
})
app.delete('/produto', (req, res) => {// obter dados
    res.send('produto excluido')
})
app.post('/produto', (req, res) => {// obter dados
  res.send('produto criado')
})
app.patch('/produto', (req, res) => {// obter dados
    res.send('produto parcialmente alterado')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})