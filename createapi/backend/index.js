import  express, { Router } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoutes.js";
dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use("/api", route);
const PORT = process.env.PORT || 5000 ;
const MURL = process.env.MURL;
main().catch(error=> console.log(error))
async function main(){
   await mongoose.connect(MURL).then(()=>{
    console.log("the database is connected")
   });
}
app.listen(PORT, ()=>{
    console.log(`your running at ${PORT}`)
});