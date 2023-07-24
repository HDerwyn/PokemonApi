const { Router } = require("express");

const { getPokemonHandler, getDetailPokeHandler } = require("./../handlers/getPokemonHandlers.js");

const getPokemonRouter = Router();



getPokemonRouter.get("/", getPokemonHandler);

getPokemonRouter.get("/:id", getDetailPokeHandler);





module.exports = getPokemonRouter;