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
    },
    image:{
        type:String,
        default:"placeholder.jpg"
    },
    rating:{
        type:Number,
        min:[1,"rating cant be less than 1"],
        max:[6,"rating cant be more than 5"],
    }

})


export default mongoose.model("Product",ProductSchema);