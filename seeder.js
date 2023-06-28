import mongoose from "mongoose";
import Product from "./models/Product.js";
import { products } from "./utils/Data.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./env/config.env"
});

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
})



const importData=async()=> {
 try {
    await Product.create(products);
    console.log("products imported");
    process.exit();
 } catch (error) {
    console.log(error);
 }
}


importData();

