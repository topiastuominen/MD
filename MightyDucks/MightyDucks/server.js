const mongoose = require('mongoose');

const osallistujaSchema = new mongoose.Schema({
  nimi: String,
  
  aktiviteetti: [String],
});

module.exports = mongoose.model('Osallistuja', osallistujaSchema);

