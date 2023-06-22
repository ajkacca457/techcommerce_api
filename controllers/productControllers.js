import AsyncHandler from "../middlewares/AsyncHandler.js"

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