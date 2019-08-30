const express = require("express");
const Announc = require("../models/Announcement");

const router = express.Router();

// Ajouter une annoce
// Post request /api/annonce/ajouter

router.post(
  "/annonce/ajouter",
  /*passport.authenticate("jwt", { session: false })*/ (req, res) => {
    const {
      ville,
      prix,
      categorie,
      chambre,
      lit,
      adresse,
      description
    } = req.body;
    const newAnnounc = new Announc({
      ville,
      prix,
      categorie,
      chambre,
      lit,
      adresse,
      description
    });

    newAnnounc
      .save()
      .then(saved => res.json({ new: newAnnounc }))
      .catch(err => console.log(err));
  }
);

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
