const asyncHandler = (requesthandelar) => {
   return (req,res,next) => {
        Promise.resolve(requesthandelar(req,res,next)).catch((err) => next(err))
    }
}
export{asyncHandler}
// const asyncHandler = (fn) => async(req ,res,next) => {
//     try{
//         await fn(req ,res,next)
//     }catch(erro){
//         res.status(erro.code || 500).json({
//             success: false,
//             message: erro.message
//         })
//     }
// }