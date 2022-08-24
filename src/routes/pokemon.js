let Pokemon = require('../models/pokemon.model');

const router = require('express').Router();

router.route('/').get((request, response) => {
    Pokemon.find()
    .then(pokemons => response.json(pokemons))
    .catch(err => response.status(400).json('errors' + err))
});


router.route('/add').post((request, response) => {
    const { name, img, type, base , status} = request.body;
    const newPokemon = new Pokemon({ name, img, type, base , status });

    newPokemon.save()
    .then(() => response.json(' added '))
    .catch(err => response.status(400).json('errors' + err))
});

module.exports = router;