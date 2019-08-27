const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require ('../config/keys')
const passport = require("passport")


const router = express.Router()


// Register Route
// Post request '/users/register'

router.post('/users/register',(req,res)=>{
    const {name,email,password}=req.body

    User.findOne({email}).then(user=>{
        if(user){
            return res.json({msg:"user already exists"})
        }
    })

    const newUser = new User({
        name,
        email,
        password
    })
     
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            newUser.password = hash
            newUser.save()
                   .then(saved=>res.json({user:newUser}))
                   .catch(err=>console.log(err))


        })
    })


    
})



// Login Route
// Post request '/users/login'

router.post('/users/login',(req,res)=>{
    const {email,password}=req.body

    User.findOne({email}).then(user=>{
        if(!user){
            return res.json({msg:"user does not exists"})
        }else{
            bcrypt.compare(password,user.password).then(isMatched=>{
                if(isMatched){
                    const payload ={id:user.id,name:user.name}
                    jwt.sign(payload,
                             keys.secretOrKey,
                             {expiresIn:68594752},
                             (err,token)=>{
                                if(err) throw err
                                res.json({ token: "Bearer " + token })
                             })
                }else {
                    return res.json({ msg: "password incorrect" });
                }
        
            })
        }
    })

})





router.get(
    "/current",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      res.json(req.user);
    }
);

module.exports = router