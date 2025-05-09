const express = require('express')
const app = express()
const port = 3000

// const adminRoutes = require('./routes/usuario')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/", (req, res)=>{
    console.log(req.body)
    res.send("ola")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
