import AsyncHandler from "../middlewares/AsyncHandler.js"
import Product from "../models/Product.js"

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


export const createProduct= AsyncHandler((req,res,next)=>{
    res.status(200).json({
        message:"will create a new product"
    })
})