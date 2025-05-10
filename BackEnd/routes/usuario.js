const express = require('express');
const router = express.Router();
// guadmin

router.get("/teste", (req, res)=>{
    console.log(req.body)
    res.send("Funcionou")
})

module.exports = router