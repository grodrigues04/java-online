const express = require('express')
const app = express()
const port = 3000

const usuario = require('./routes/usuario')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(usuario)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
