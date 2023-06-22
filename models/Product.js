import mongoose from "mongoose";

const ProductSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name is requires"],
        maxLength: [50, "Product name cannot exceed 50 characters"]
    },
    price:{
        type:Number,
        require:[true,"product price is required"],
        min:[1,"product price cant be less than 0"]
    }


})


export default mongoose.model("Product",ProductSchema);