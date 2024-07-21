const express = require('express')
const router = express.Router()
const User = require('../../models/Users')

router.post('/',(req,res)=>{

    let saved = new User(req.body)
    saved.save().then(data=>{
        res.json({success:true,message:"Account Created Successfully"})
    }).catch(err=>{
        res.json({success:false,message:"An Error Occured"})
    })

})

module.exports = router