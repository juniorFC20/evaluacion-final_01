const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  tipo: { type: String, required: true },
  nivel: { type: Number, default: 1 }
}, { timestamps: true });

module.exports = mongoose.model('Pokemon', PokemonSchema);
