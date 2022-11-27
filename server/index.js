const  {connectDatabase} = require("./database/DBConnection.js")
const express = require("express");

require('dotenv').config({
    path: './.env'
})
const cors = require('cors');
const searchRouter = require("./Routers/SearchRouter.js")


const app = express();
app.use(cors());
app.use(express.json())

app.use('/products',searchRouter);








connectDatabase()
.then(() => {
    app.listen(8000, () => {
        console.log('Listening on http://localhost:8000')
    })
})














