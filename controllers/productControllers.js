import AsyncHandler from "../middlewares/AsyncHandler.js"
import Product from "../models/Product.js"
import CustomError from "../utils/CustomError.js"
import path from "path";

export const getProducts=AsyncHandler(async(req,res,next)=>{
    const products=await Product.find();

    if(!products) {
        return next(new CustomError("products are not available",400))
    };

    res.status(200).json({
        products,
        message:`${products.length} products found.`
    })
}) 


export const getProduct= AsyncHandler(async (req,res,next)=>{
    const {id}= req.params;
    const product= await Product.findById(id);

    if(!product) {
        return next(new CustomError(`cant find product with id - ${id}`,400))
    }

    res.status(200).json({
        product,
        message:`product with id - ${id}`
    })
})


export const createProduct= AsyncHandler(async (req,res,next)=>{

    const {name,description,price,image,rating,company,category,featured}= req.body;

    if(!name||!description||!price||!rating||!company||!category) {
        return next (new CustomError("provide required fields"),400)
    }

    const product= await Product.create({
        name,description,price,rating,company,image,featured,category
    })

    if(!product) {
        return next (new CustomError("product cant be created"),400)
    }

    res.status(200).json({
        product,
        message:`a new product is successfully created!`
    })
})

export const uploadImage=AsyncHandler(async(req,res,next)=>{
    const {id}= req.params;

    const product= await Product.findById(id);

    if(!product) {
        return next(new CustomError(`cant find product with id - ${id}`,400));
    }

    if(!req.files) {
        return next(new CustomError(`Add an image file`,400))
    }

    const {file}= req.files;

    if(!file.mimetype.startsWith("image")) {
        return next(new CustomError(`Add a valid image file`,400))
    }

    if(file.size>process.env.MV_MAX_FILE_SIZE) {
        return next(new CustomError(`Add a valid image file`,400))
    }

    file.name= `image_${id}${path.parse(file.name).ext}`;
    let updatedProduct;

    file.mv(`${process.env.MV_UPLOAD_PATH}/${file.name}`, async(err)=>{
        if(err) {
            return next(new CustomError(`problem with uploading images`,500))
        }

       updatedProduct= await Product.findByIdAndUpdate(id,{image:file.name})
    })

    res.status(200).json({
        updatedProduct,
        message:"image is saved"
    })
})