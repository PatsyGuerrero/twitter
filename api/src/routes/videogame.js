// const {Videogame, Genero} = require ('../db.js');
// var Sequelize = require("sequelize");
// const server = require('express').Router();
// const axios = require ('axios');
// const {response} = require ('express');
// const {
//     YOUR_API_KEY
//   } = process.env;

// server.post('/videogame', async function(req, res){

//     let {name,description, release_date, rating, platforms, selection} = req.body;

//     if (!Array.isArray(selection)) {
//         selection = [selection];
//       }

//     let g=selection.map( p => Number(p));

//     try {
  
//         let juego = await Videogame.create({
            
//             name: name,
//             release_date:release_date,
//             description:description,
//             rating:rating,
//             platforms:platforms
//         })
      
//         let genreDB= await Genero.findAll({
//             where:{
//                 id:{
//                     [Sequelize.Op.in]:g,
//                 },
//             },

//         })
//             juego.setGeneros(genreDB);

//             let juegos = await Videogame.findAll({
//                 include:{model:Genero,  attributes:{exclude: ["createdAt" , "updatedAt"]} },
//                 attributes:{exclude: ["createdAt" , "updatedAt"]}
//             });
            
        
//             return res.status(200).json(juegos);

//     } catch (err) {
//         return res.sendStatus(404);
//     }
   
// });


// server.get('/videogame/:idVideogame', async function (req, res) {

//     const {idVideogame} = req.params;

//     try {

//         let videogames =  await axios.get(`https://api.rawg.io/api/games/${idVideogame}`)

//         let obj = {
//             name:videogames.data.name,
//             description: videogames.data.description,
//             release: videogames.data.released,
//             image: videogames.data.background_image,
//             ratings: videogames.data.ratings,
//             platforms: videogames.data.platforms,
//             genres: videogames.data.genres           
//         };
        
//         return res.json(obj);

//     } catch (err) {
//         return res.sendStatus(404);
//     }  
// })




// module.exports= server;