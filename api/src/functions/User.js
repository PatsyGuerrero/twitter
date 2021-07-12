require('dotenv').config();
const { User, Login, Retweet, Tweet } = require("../db");
const jwt = require("jsonwebtoken");
// const { sendEmail } = require("./emailService");
// const { getCurrentDomainFront } = require("../config/currentDomain");
// const server = require('express').Router();
// const {response} = require ('express');


async function createUser(name, password, email,user_name) {
   //console.log('create', name, password, email,user_name )
  if(!name && password && user_name & email ) return 'Ingresar el name';
  if(name &&!password && user_name & email) return 'Ingresar contraseña';
  if(name && password && !user_name & email) return 'Ingresar username';
  if(name && password && user_name & !email) return 'ingresar email';

    try {

        let emailVerified = await User.findOne({
          where: {
            email: email,
          },
        });
        //console.log('email', emailVerified);

        let username = await User.findOne({
          where: {
            user_name: user_name,
          },
        });

        //console.log('username', username);

        if(emailVerified==null && username) return 'Ya existe ese username';
        if(emailVerified && username==null) return 'Ya existe emailVerified';
        if(emailVerified && username) return 'Ya existen el username y email';

        if (!emailVerified && !username){
          let [newUser, created] = await User.findOrCreate({
            where: { email, user_name},
            defaults: {
              name,
              password,
              email,
              user_name  
            },
          });  

          return true;

        }

        // if (!created){
        //   return ('Ya existe el usuario con ese email');     
        //   }

         
              
    } catch (error) {
     return ('Error')
    }
  }

  async function loginUser(email, password) {
    
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    
    if (!user) {
      return ('El usuario no se encuentra registrado')
    }
    
    if (user) {
      const hashed = User.encryptPassword(password, user.salt());
      if (hashed === user.password()) {
        const token = jwt.sign(
          {
            id: user.id,
            name: user.name,
          },
          "secret",
          { expiresIn: 60 * 60 }

        ); 
        
        let login = await Login.create({});
     
        user.setLogins(login);
   
        return {   
          id: user.id,
          name: user.name,
          email: user.email,
          token: token,
          user_name: user.user_name
        };
        
      } else {
        return ('Contraseña incorrecta');
      }
    }
  }
  //------ DELETE USER ---------
  async function deleteUser(id) {
    try {
      const userToDelete = await User.findByPk(id);
      await userToDelete.destroy();
  
      return { __typename: "booleanResponse", boolean: true };
    } catch (error) {
      return { __typename: "error", name: "error", detail: "User not found" };
    }
  }



  async function validateCredentials(user, token){
        try{
             user=user.split('\"')[1];
             token=token.split('\"')[1];
            const userValidate = await User.findOne({
              where: {
                email: user,
              },
            });

            if(userValidate) { 
              const authToken = (token !== 'null' || !token) ? token: null;
              // console.log(authToken, 'este est el puto', _)
              const decoded = jwt.verify(authToken, "secret");

              return true
            }
            
            return false;

        }catch{
          
            return false;

            
        }
      }
    

  module.exports = {
    createUser,
    loginUser,
    deleteUser, 
    validateCredentials
  };