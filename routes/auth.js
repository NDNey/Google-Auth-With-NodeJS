const express = require('express')
const router = express.Router()
const passport = require('passport')

// @desc Auth with Goglle
// @route Get /auth/google

router.get('/google', passport.authenticate('google',{scope:['profile']}))
// @desc Google auth callback
// @route Get /auth/google/callback

router.get('/google/callback', passport.authenticate('google',{failureRedirect:'/'}),(req,res)=>{
    res.redirect('/dashboard')
})
// @desc ;ogout usser
//@route //auth/loout
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/')
})
module.exports = router