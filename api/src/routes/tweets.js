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
    const {tweet, email, url} = req.body;
  
    try {
       
        let postTweet= await createTweet(tweet, email, url);
       // let create = createUser()

        return res.send(postTweet);
  
    } catch (err) {

         return res.sendStatus(404);
       
    }
   
  });

  server.get('/tweets', async function(req, res){
    
    
 
    try {
    
        let tweets= await getAllTweets();
     
     
        return res.send(tweets);
  
    } catch (err) {

        return res.sendStatus(404);
        
    }
   
  });


module.exports= server;