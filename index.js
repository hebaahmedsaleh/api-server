const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const Pokemons = require('./src/pokemon.json');
const pokemonRouter = require('./src/routes/pokemon');

const app = express();
const port = process.env.PORT || 3000;

// Where we will keep books
let books = [1,2,3,4,5];

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });


const connection = mongoose.connection;
connection.once('open', () => console.log("connection established"));

app.use('/pokemon', pokemonRouter);
app.get('/', (request, response) => {
    return response.send('Welcome on the books API! Take a breath and start using it!')
});

app.get('/pokemons', (request, response) => {
    return response.send(Object.values(Pokemons))
});

app.get('/pokemons/:pokemonId', (req, res) => {
    const pokemon = Pokemons[req.params.pokemonId];
    return res.send(pokemon);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
