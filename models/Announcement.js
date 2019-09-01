const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncSchema = new Schema({
  ville: {
    type: String
    //required: true
  },
  gouvernerat: {
    type: String
  },
  categorie: {
    type: String
    // required: true
  },
  typebien: {
    type: String
  },
  adresse: {
    type: String
    // required: true
  },
  chambre: {
    type: Number
    // required: true
  },
  lit: {
    type: Number
    // required: true
  },
  prix: {
    type: Number
    //required: true
  },
  image: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Announc = mongoose.model("annonces", AnnouncSchema);
