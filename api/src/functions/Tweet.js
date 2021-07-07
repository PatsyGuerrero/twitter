require('dotenv').config();
const { User, Login, Retweet, Tweet } = require("../db");
const server = require('express').Router();
const {response} = require ('express');
var Sequelize = require("sequelize");


async function createTweet(tweet, idUser) {
    
      if(tweet.length >250){
          return ('Máximo 250 caracteres')
      }    
      let g= Number(idUser);

    try {

        const user=await User.findOne({
            where:{
              id:g
            }
          })
       
          if(!user) return (`El id ${g} no existe`);

        let insert = await user.createTweet({ 
            tweet: tweet,
            userId:user.id
        })
 
        // insert.setTweets(tweetId);

            // let juegos = await Tweet.findAll({
            //     include:{model:User,  attributes:{exclude: ["createdAt" , "updatedAt"]} },
            //     attributes:{exclude: ["createdAt" , "updatedAt"]}
            // });
        return ('El tweet se guardo correctamente');
      } catch (error) {
        return ('Error')
      }

}

module.exports = {
    createTweet
  };