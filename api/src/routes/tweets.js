// require('dotenv').config();
// const server = require('express').Router();
// const {Genero} = require('../db.js')
// const axios = require ('axios');
// const {response} = require ('express');
// const {
//     YOUR_API_KEY
//   } = process.env;
  

// server.get('/genres', async function (req, res) {
//     try {
        
//         let genres = await Genero.findAll();

//         if (genres.length === 0) {
//             genres= await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
//             let genre= genres.data.results.map(async p => await Genero.create({nombre:p.name}));
//         }

//         genres = await Genero.findAll();

//         return res.status(200).json(genres); 

//     } catch (err) {
//         return res.sendStatus(404);
//     }
// });


// module.exports= server;