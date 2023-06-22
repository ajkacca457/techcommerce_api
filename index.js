import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ErrorHandler from "./middlewares/ErrorHandler";


dotenv.config({
    path:"./env/config.env"
});

const app= express();
app.use(cors);
app.use(express.json());



app.use(ErrorHandler);

app.listen("5000",()=>{
    console.log("app is listening to port 5000");
})


