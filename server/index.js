import express from "express"
import connection from "./config/db.js";
import { signup, login, userLoggedIn } from "./controllers/user.controller.js";

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send({
        message:"welcome"
    })
})

app.post("/signup",signup)

app.post("/login",login)

app.get("/userLoggedIn",userLoggedIn)



app.listen(8080,()=>{
    try {
        connection();
        console.log('listening on port 8080');
    } catch (error) {
        console.log(error);
    }
})
