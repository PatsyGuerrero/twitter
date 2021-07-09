require('dotenv').config();
var Sequelize = require("sequelize");
const server = require('express').Router();
const {User} = require ('../db.js');
const axios = require ('axios');
const fetch = require('node-fetch');
const {response} = require ('express');
const { createUser, loginUser } = require('../functions/User.js');
//const {loginUser} = '../functions/User.js'


server.post('/register', async function(req, res){

  const {name, password, email,user_name} = req.body;

  //console.log('parametros', req.body)
  try {

      let registerUser = await createUser(name, password, email,user_name);
     // let create = createUser()
      
      console.log(registerUser);
          return res.sendStatus(200);

  } catch (err) {
       return res.sendStatus(404);
      
  }
 
});


  server.post('/login', async function(req, res){

    const {email, password} = req.body;

    console.log('parametros',email)
    try {
  
        let login = await loginUser(email, password);
       // let create = createUser()
        
        
            return res.status(200).json(login);

    } catch (err) {
         return res.sendStatus(404);
        
    }
   
});




module.exports= server;