require('dotenv').config();
const { User, Login, Retweet, Tweet } = require("../db");
const server = require('express').Router();
const {response} = require ('express');
var Sequelize = require("sequelize");


async function createTweet(tweet, email, url) {
  
      console.log('email', email)
      

      if(tweet.length >250){
          return ('Máximo 250 caracteres')
      }    
      
      // if(email.includes('"')) {
      //   email=email.split('"')[1];
      // }

    try {

        const user=await User.findOne({
            where:{
              email:email
            }
          })
       
          console.log(user);
          if(!user) return (`El email ${email} no existe`);

        let insert = await user.createTweet({ 
            tweet: tweet,
            url:url,
            userId:user.id
        })

        return true;
      } catch (error) {
        // return ('Error')
        console.log(error)
      }
}

async function getAllTweets() {

     
      try {
          
          let tweets = await Tweet.findAll({
                      
            include:{model:User,  attributes:{exclude: ["createdAt" , "updatedAt"]} },
            attributes:{exclude: ["updatedAt"]}

            });

            return tweets;

        } catch (err) {
            return ('No existen tweets')
        }


}


module.exports = {
    createTweet,
    getAllTweets
  };