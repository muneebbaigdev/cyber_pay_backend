const express = require('express')
const router = express.Router()
const User = require('../../models/Users')
const jwt = require('jsonwebtoken')

router.post('/',(req,res)=>{

    let saved = new User(req.body)
    saved.save().then(data=>{

            jwt.sign(JSON.stringify(data),'mykey123',(err,token)=>{
                if(token){
                    
                    res.json({success:true,message:"Account Created Successfully",token})

                }else{
                    res.json({success:false,message:"An Error Occured"})
                }
            })

        

    }).catch(err=>{
        res.json({success:false,message:"An Error Occured"})
    })

})

module.exports = router