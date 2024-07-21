const express = require('express')
const router = express.Router()

router.use('/login',require('./authentication/login'))
router.use('/signup',require('./authentication/signup'))

router.get('/',(req,res)=>{
    res.send("invalid api route")
})

module.exports = router