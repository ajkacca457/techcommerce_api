import mongoose from "mongoose";

const ProductSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name is required"],
        maxLength: [50, "Product name cannot exceed 50 characters"]
    },
    description:{
        type:String,
        required:[true,"product description is required"],
        maxLength: [200, "Product name cannot exceed 200 characters"]
    },
    price:{
        type:Number,
        required:[true,"product price is required"],
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
        required:[true,"product rating is required"],
    },
    shipping:{
        type:Boolean,
        default:false
    },
    category:{
        type:String,
        enum:["laptop","tablet","desktop","mobile"]
    },
    company:{
        type:String,
        enum:["Apple","Lenevo","Asus","Sony","Nokia","Samsung","Motorolla","Oppo"]
    },
    featured:{
        type:Boolean,
        default:false
    }

})


export default mongoose.model("Product",ProductSchema);