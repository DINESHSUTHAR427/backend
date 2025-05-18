class ApiError extends Error{
    constructor(
        statusCode,
        massage = "Something went worng",
        error = [],
        stack = ""
    ){
        super(massage)
        this.statusCode= statusCode
        this.data = null
        this.message = massage
        this,success = false;
        this.error = error
        if(stack){
            this.stack= stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}
export {ApiError};