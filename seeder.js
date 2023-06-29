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

const deleteData=async()=> {
    try {
       await Product.deleteMany({});
       console.log("products deleted");
       process.exit();
    } catch (error) {
       console.log(error);
    }
   }
   

if (process.argv[2]==="-i") {
    importData();
} else if( process.argv[2]==="-d") {
    deleteData();
}

