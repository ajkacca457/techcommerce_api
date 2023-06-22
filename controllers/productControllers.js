export const getProducts= (req,res,next)=>{
    console.log(req);

    res.status(200).json({
        message: "will get all the products"
    })

}