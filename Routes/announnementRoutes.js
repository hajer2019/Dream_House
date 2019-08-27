const express = require("express");
const Announc = require("../models/Announcement");

const router = express.Router();

// Ajouter une annoce
// Post request /api/annonce/ajouter

router.post("/annonce/ajouter", (req, res) => {
  const { service, prix, disponibilité, chambre, lit, adresse } = req.body;
  const newAnnounc = new Announc({
    service,
    prix,
    disponibilité,
    chambre,
    lit,
    adresse
  });

  newAnnounc
    .save()
    .then(saved => res.json({ new: newAnnounc }))
    .catch(err => console.log(err));
});

// Trouver tous les Annonces
// Get request /api/annonce

router.get("/annonce", (req, res) => {
  Announc.find()
    .then(annonces => res.json(annonces))
    .catch(err => res.send("cannot get"));
});

// Supprimer une annoce
// Get request /api/annonce/:id

router.delete("/annonce/:id", (req, res) => {
  Announc.findOneAndDelete(req.params.id)
    .then(data => res.send({ success: true }))
    .catch(err => res.send({ success: false }));
});

module.exports = router;
