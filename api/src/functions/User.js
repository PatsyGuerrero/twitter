require('dotenv').config();
const { User, Login, Retweet, Tweet } = require("../db");
const server = require('express').Router();
const {response} = require ('express');


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
        
            // created true es por que lo creó, no existia
            // siempre devuelve el usuario, pero el detalle va en función de
            // si existia o no
            
            if (created){
                return ('Ya existe el usuario con ese email');
                
            }
          return ('El usuario fue creado')
        //    return { __typename: "user", ...user.dataValues, detail: "Email" };
          
        
    } catch (error) {
     return ('Error')
    }
  }

  async function loginUser(email, password) {
    //
    const user = await User.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      return {
        __typename: "error",
        name: "The user doesn't exists",
        detail: "The user doesn't exists",
      };
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
        ); //60*60 = 3600 seg = 1 hour
        return {
          __typename: "user",
          id: user.id,
          name: user.name,
          email: user.email,
          token: token,
          role: user.role,
          twoFA: user.twoFA
        };
      } else {
        return {
          __typename: "error",
          name: "invalid password",
          detail: "invalid password",
        };
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