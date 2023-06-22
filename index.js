import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ErrorHandler from "./middlewares/ErrorHandler.js";
import productRoutes from "./routes/productRoutes.js";


dotenv.config({
    path:"./env/config.env"
});

const app= express();
app.use(cors);
app.use(express.json());

app.use("/api/v1/products",productRoutes);

app.use(ErrorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`app is listening to port ${process.env.PORT}`);
})


