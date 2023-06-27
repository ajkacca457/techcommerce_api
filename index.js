import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import productRoutes from "./routes/productRoutes.js";
import ConnectDB from "./db/Db.js";
import expressFileUpload from "express-fileupload";

dotenv.config({
    path:"./env/config.env"
});

const app= express();
app.use(cors());
app.use(express.json());
app.use(expressFileUpload());
app.use(express.static("public"));

app.use("/api/v1/products",productRoutes);

app.use(ErrorHandler);

const startServer=async()=>{
    try {
        const connect= await ConnectDB();
        app.listen(process.env.PORT,()=>{
            console.log(`server is connected to ${connect.connection.host}`);
        })
    } catch (error) {
        console.log(error);
    }
}


startServer();

