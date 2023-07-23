const getPokemonHandler = (req, res) => {
  res.status(200).send("todos los Pokemons");
};

const getDetailPokeHandler = (req, res) => {
  res.status(200).send("Detalle del pokemon por ID");
};


module.exports = {
    getPokemonHandler, 
    getDetailPokeHandler
};