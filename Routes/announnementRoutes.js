const express = require("express");
const Announc = require("../models/Announcement");
const multer = require("multer");

const router = express.Router();

// Ajouter une annoce
// Post request /api/annonce/ajouter

router.post("/annonce/ajouter", (req, res) => {
  const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, "./uploads/");
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });
  const upload = multer({ storage: storage }).single("image");
  upload(req, res, function(err) {
    if (err) {
      console.log(err);
    }
    //console.log(req.body);
    //console.log(req.file);
    const newAnnounc = new Announc({
      ville: req.body.ville,
      prix: req.body.prix,
      categorie: req.body.categorie,
      chambre: req.body.chambre,
      lit: req.body.lit,
      gouvernerat: req.body.gouvernerat,
      description: req.body.description,
      typebien: req.body.typebien,
      image: req.file.path
    });
    console.log(newAnnounc);
    newAnnounc.save();
  });
});

// Trouver tous les Annonces
// Get request /api/annonce

router.get("/annonce", (req, res) => {
  Announc.find()
    .then(annonces => res.json(annonces))
    .catch(err => res.send("cannot get"));
});

// Trouver une annonce par id
// Get request /api/annonce/id
router.get("/annonce/:id", (req, res) => {
  Announc.findById(req.params.id)
    .then(annonce => res.json(annonce))
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
