const express = require('express')
const router = express.Router()

router.use('/login',require('./authentication/login'))
router.use('/signup',require('./authentication/signup'))
router.use('/verifytoken',require('./authentication/verifytoken'))

router.get('/',(req,res)=>{
    res.send("invalid api route")
})

module.exports = router