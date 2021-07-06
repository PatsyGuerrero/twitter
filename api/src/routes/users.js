require('dotenv').config();
var Sequelize = require("sequelize");
const server = require('express').Router();
const {User} = require ('../db.js');
const axios = require ('axios');
const fetch = require('node-fetch');
const {response} = require ('express');
const {
    YOUR_API_KEY
  } = process.env;


server.get('/', async function (req, res) {

    // try {
    //     let juegos = await Videogame.findAll({
    //         include:{model:Genero,  attributes:{exclude: ["createdAt" , "updatedAt"]} },
    //         attributes:{exclude: ["createdAt" , "updatedAt"]}
    //     });

    res.send('Hello World!');

    // } catch (err) {
    //     return res.sendStatus(404);
    // }
    
})

// server.get('/videogames', async function (req, res) {
//     // return res.status(200).json({});

//     let {name, page} = req.query;

//     //console.log(' estoy en back page', name);

//     if (name) {
        
//         let buscar = await axios.get(`https://api.rawg.io/api/games?search=${name}`)

//         buscar= buscar.data.results.splice(0,15);
        


//         return res.status(200).json(buscar);
//     }

//     let offset= 0;
//     const limit = 15;
//     let videogames;

//     if (page > 0) {
//         offset = (page -1) * limit;
//     }

//     try {
       
//             videogames =  await axios.get(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);

//             // let videogamesnext = videogames.data.next;

//             // let videogamesprevious = videogames.data.previous;

//             do {
//                 if(videogames.data.next) {
//                     const {data} = await axios.get(videogames.data.next);

//                     videogames.data.results = videogames.data.results.concat(data.results); 
                    
//                     videogames.data.next = videogames.data.next
//                 }

//             } while ( videogames.data.next && videogames.data.results.length < limit + offset);
        
//         } catch (err) {
//             throw err;
//         } finally {
         
//             let resultadoFinal = videogames.data.results.splice(offset, limit);

//             let  gamesId  = await  resultadoFinal.map(game => axios.get(`https://api.rawg.io/api/games/${game.id}`));

//             let result2 = await Promise.all(gamesId)
            
//             let arr =[];

//             result2 = result2.forEach(c =>  arr.push(c.data))

//             let hola= [];

//             arr.map(key => {
//                hola.push({
//                    id:key.id,
//                    name:key.name,
//                    rating:key.rating,
//                    released:key.released,
//                    description:key.description_raw.substring(0, 300),
//                    genres: key.genres.map(u => u.name),
//                    platforms: key.platforms.map(u => u.platform.name),
//                    image: key.background_image
//                });
//             })
            
//                return res.status(200).json(hola);
//         }
// })





module.exports= server;