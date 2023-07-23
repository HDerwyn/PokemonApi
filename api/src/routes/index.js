const { Router } = require('express');
const getPokemonRouter = require('./getPokemonRoutes');
const postPokemonRouter = require('./postPokemonRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/pokemons", getPokemonRouter);

router.use("/post", postPokemonRouter);

router.get("/home",(req,res)=>{
    res.status(200).send("homePage")
})




module.exports = router;
