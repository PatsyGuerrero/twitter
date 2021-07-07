const {  User, Tweet, Retweet, Login  } = require("./db");
const { createUser, modifyUser } = require("./functions/User.js");


const MOCK_USER = require("./MOCK_USER.json");

async function dataPopulation() {

    await createUser("santi","1234","santiagorincon2001@gmail.com","santi_malcriadito");
    await createUser("fran","1235","franronaldo@gmail.com","fran_peligroso");
    await User.bulkCreate(MOCK_USER);
   // await User.bulkCreate(MOCK_USER);

    

}

module.exports = { dataPopulation };