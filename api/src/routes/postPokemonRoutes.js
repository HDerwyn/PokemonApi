const { Router } = require("express");

const  postPokeHandler  = require("./../handlers/postPokemonHandlers.js");

const postPokemonRouter = Router();


postPokemonRouter.post("/", postPokeHandler);


module.exports = postPokemonRouter;
