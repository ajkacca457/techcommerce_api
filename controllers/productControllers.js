import AsyncHandler from "../middlewares/AsyncHandler.js"
import Product from "../models/Product.js"
import CustomError from "../utils/CustomError.js"

export const getProducts=AsyncHandler((req,res,next)=>{
    res.status(200).json({
        message: "will get all the products"
    })
}) 


export const getProduct= AsyncHandler((req,res,next)=>{
    res.status(200).json({
        message:"will get single product"
    })
})


export const createProduct= AsyncHandler(async (req,res,next)=>{

    const {name,description,price,image,rating,company,category,featured}= req.body;

    if(!name||!description||!price||!rating||!company||!category) {
        return next (new CustomError("provide required fields"),401)
    }

    const product= await Product.create({
        name,description,price,rating,company,image,featured,category
    })

    if(!product) {
        return next (new CustomError("product cant be created"),401)
    }

    res.status(200).json({
        product
    })
})