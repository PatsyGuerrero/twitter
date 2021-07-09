const {  User, Tweet, Retweet, Login  } = require("./db");
const { createUser } = require("./functions/User.js");
const {createTweet} = require("./functions/Tweet.js");


const MOCK_USER = require("./MOCK_USER.json");

async function dataPopulation() {

    await createUser("santi","1234","santiagorincon2001@gmail.com","santi_malcriadito");
    await createUser("fran","1235","franronaldo@gmail.com","fran_peligroso");
    await createUser("Patsy Guerrero","123456","patsy_guerrero95@hotmail.com","patsyguerrero");
    //await User.bulkCreate(MOCK_USER);
   // await User.bulkCreate(MOCK_USER);

   await createTweet("En Twitter: ¿Otra temporada? ¡Nadie ve esa serie! Con amigos: Amix, ¿me prestas tu Netflix? ", "3");
   await createTweet("No hace falta un gobierno perfecto; se necesita uno que sea práctico. Aristóteles ", "1");
   await createTweet("No hace falta un gobierno perfecto; se necesita uno que sea práctico. Aristóteles ", "2");

    

}

module.exports = { dataPopulation };