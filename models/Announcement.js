const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnnouncSchema = new Schema({
  type: {
    type: String
    //required: true
  },
  service: {
    type: String
    // required: true
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

  disponibilité: {
    type: Date,
    default: Date.now,
    required: false
  }
});

module.exports = Announc = mongoose.model("annonces", AnnouncSchema);
