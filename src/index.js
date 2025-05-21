
// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connetDB from "./db/index.js";
import{app} from './app.js'

dotenv.config({
    path: './env'
})

connetDB()
.then (()=> {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`server is conneted at port:${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongodb connection failed!!!",error);
})



// import express from "express"
// const app = express()

// ( async() => {
//     try{
//        await mongoose.connect(`${process.env.MONGBD_UR}/${DB_NAME}`)
//        app.on("error", (error) => {
//         console.log(" application not connect from database",error);
//         throw error;
//        })
//        app.listen(process.env.PORT,() => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
//     }catch(error){
//         console.log("Error:",error)
//     }
// })()
    