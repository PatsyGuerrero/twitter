require('dotenv').config();
var Sequelize = require("sequelize");
const server = require('express').Router();
const { createUser, loginUser, validateCredentials } = require('../functions/User.js');
//const {loginUser} = '../functions/User.js'


server.post('/register', async function(req, res){

  const {name, password, email,user_name} = req.body;

  console.log('parametros', req.body)
  try {

      let registerUser = await createUser(name, password, email,user_name);
     // let create = createUser()
      
     
          return res.sendStatus(200);

  } catch (err) {
       return res.sendStatus(404);
      
  }
 
});


server.get('/login', async function(req, res){

     const {email, password} = req.query;
 
     console.log('parametros',email, req.query)
     try {
   
         let login = await loginUser(email, password);
        // let create = createUser()
         
         
             return res.status(200).json(login);
 
     } catch (err) {
          return res.sendStatus(404);
         
     }
    
 });

 server.get('/validate', async function(req, res){

     const {user, token} = req.query;
 
     console.log('parametros', user, token, 'nocheckjjn')
     try {
   
         let validate= await validateCredentials(user, token);
        // let create = createUser()

              return res.status(200).json(validate);
 
     } catch (err) {
          return res.sendStatus(404);
         
     }
    
 });

module.exports= server;