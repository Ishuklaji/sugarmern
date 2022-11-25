const mongoose = require("mongoose");
// require('dotenv').config({
//     path: './.env'
// })
// Step 1. Connect to DB
async function connectDatabase() {
    console.log(process.env.DB_URL)
    return new Promise((resolve, reject) => {
     
        mongoose.connect(process.env.DB_URL, (err) => {
            if (err) {
                console.log('Error conencting to DB')
                reject(err)
            } else {
                console.log('Successfully connected to DB')
                resolve()
            }
        })
    })
}

module.exports = {
    connectDatabase
}