const { Router } = require("express");

const {postPokeHandler} = require("/api/src/handlers/postPokemonHandlers")

const postPokemonRouter = Router();



postPokemonRouter.post("/", postPokeHandler);


module.exports = postPokemonRouter;
