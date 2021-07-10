require('dotenv').config();
var Sequelize = require("sequelize");
const server = require('express').Router();
const {Tweet} = require ('../db.js');
const axios = require ('axios');
const fetch = require('node-fetch');
const {response} = require ('express');
const { createTweet, getAllTweets} = require('../functions/Tweet.js');
//const {loginUser} = '../functions/User.js'

//console.log('entra');

server.post('/create', async function(req, res){
    
    console.log('ruta tweet', req.body)
    const {tweet, idUser} = req.body;
  
    
    try {
        console.log('dudas')
        let postTweet= await createTweet(tweet, idUser);
       // let create = createUser()
        
        console.log(postTweet);
            return res.sendStatus(200);
  
    } catch (err) {

         return res.sendStatus(404);
       
    }
   
  });

  server.get('/tweets', async function(req, res){
    
    console.log('ruta tweets')
 
    try {
        console.log('dudas')
        let tweets= await getAllTweets();
     
        
        return res.status(200).json(tweets);
  
    } catch (err) {

        return res.sendStatus(404);
        
    }
   
  });


module.exports= server;