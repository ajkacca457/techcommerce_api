import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config({
    path:"./env/config.env"
});

const app= express();
app.use(cors);
app.use(express.json());

app.listen("5000",()=>{
    console.log("app is listening to port 5000");
})