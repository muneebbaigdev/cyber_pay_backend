const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/',(req,res)=>{
    let {token} = req.body
    let checkedToken = jwt.verify(token,"mykey123")
    let {username,email} = checkedToken
    res.json({success:true,username,email,message:"account verified"})
})

module.exports = router