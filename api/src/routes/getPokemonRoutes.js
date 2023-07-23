const { Router } = require("express");

const {getPokemonHandler, getDetailPokeHandler} = require("/api/src/handlers/getPokemonHandlers")

const getPokemonRouter = Router();



getPokemonRouter.get("/", getPokemonHandler);

getPokemonRouter.get("/:id", getDetailPokeHandler);





module.exports = getPokemonRouter;