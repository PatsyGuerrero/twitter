const {  User, Tweet, Retweet, Login  } = require("./db");
const { createUser, modifyUser } = require("./functions/User.js");


const MOCK_USER = require("./MOCK_USER.json");

async function dataPopulation() {

    await createUser("santi","1234","santiagorincon2001@gmail.com","santi_malcriadito");
    await User.bulkCreate(MOCK_USER);

    // const user = await User.findOne({
    //     where:{
    //         id:2
    //     }
    // })
    // user.secretOtp = "HBGSUVDMHZLDY7JVMZASULZOIFPCSZKR"
    // user.save()

    // return true

}

module.exports = { dataPopulation };