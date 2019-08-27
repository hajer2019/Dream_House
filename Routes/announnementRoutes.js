const express = require('express')
const Announc = require('../models/Announcement')

const router = express.Router()



//Ajouter une annoce
// Post request /api/annonce/ajouter
router.post('/annonce/ajouter',(req,res)=>{
    const {service,prix,disponibilité,chambre,lit,adresse} =req.body
    const newAnnounc = new Announc ({
        service,
        prix,
        disponibilité,
        chambre,
        lit,
        adresse
    })

    newAnnounc.save()
              .then(saved=>res.json({new:newAnnounc}))
              .catch(err=>console.log(err))
})


// Trouver tous les Annonces
// Get request /api/annonce

router.get('/annonce',(req,res)=>{
   const annonces = Announc.find()
   res.json(annonces)
})


//Trouver une annoce spécifique
// Get request /api/annonce/:id

router.get('/annonce/:id',(req,res)=>{
    res.json({annonce : Announc.findById(req.params.id) })
    
})

module.exports = router