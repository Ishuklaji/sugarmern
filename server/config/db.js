import mongoose from "mongoose";

const connection = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/sugar-cosmetics")
    console.log("Connection done")
}

export default connection;