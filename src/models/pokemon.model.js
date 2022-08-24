const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
      },
      type: {
        type: Array,
        required: false,
      },
      base: {
        type: Object,
        required: false,
      },
    status: {
        type: Boolean,
        required: false,
    }
}, {
    timestamps: false,
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema);

module.exports = Pokemon;