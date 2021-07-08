require('dotenv').config();
const { User, Login, Retweet, Tweet } = require("../db");
const jwt = require("jsonwebtoken");
// const { sendEmail } = require("./emailService");
// const { getCurrentDomainFront } = require("../config/currentDomain");
// const server = require('express').Router();
// const {response} = require ('express');


async function createUser(name, password, email,user_name) {
   
    try {

        let [newUser, created] = await User.findOrCreate({
          where: { email },
          defaults: {
            name,
            password,
            email,
            user_name
            
          },
        });
        
        if (!created){
          return ('Ya existe el usuario con ese email');     
          }

          return ('El usuario fue creado')
              
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

  module.exports = {
    createUser,
    loginUser,
    deleteUser
  };