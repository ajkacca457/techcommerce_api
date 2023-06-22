import { StatusCodes } from "http-status-codes";
import CustomError from "../utils/CustomError";

const ErrorHandler= (err,req,res,next,)=>{

let error;

error= {...err};
error.message= err.message;
error.statuscode= err.statuscode;

if(error.name==="ValidationError") {
    let message= Object.values(error.errors).map(item=>item.properties.message);
    error= new CustomError(message,StatusCodes.BAD_REQUEST)
}

if(error.name==="CastError") {
    let message= `Product with ID ${error.value} doesnt exists`;
    error= new CustomError(message,StatusCodes.NOT_FOUND);
}

if(err.code===11000){
    error= new CustomError(err.message,StatusCodes.CONFLICT);
}

res.status(error.statusCode||StatusCodes.INTERNAL_SERVER_ERROR).json({
    success:false,
    message:error.message
})

}


export default ErrorHandler;