const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');


router.post('/', async (req, res) => {
  try {
    const pokemon = new Pokemon(req.body);
    await pokemon.save();
    res.status(201).json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  const pokemones = await Pokemon.find();
  res.json(pokemones);
});


router.get('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);
    if (!pokemon) return res.status(404).json({ error: 'Pokemon no encontrado' });
    res.json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pokemon) return res.status(404).json({ error: 'Pokemon no encontrado' });
    res.json(pokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
    if (!pokemon) return res.status(404).json({ error: 'Pokemon no encontrado' });
    res.json({ mensaje: 'Pokemon eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
