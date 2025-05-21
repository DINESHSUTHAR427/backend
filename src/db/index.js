import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connetDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://dineshsutharr427:suthar8989@cluster31.3zwphmz.mongodb.net/?retryWrites=true&w=majority&appName=cluster31/${DB_NAME}`)
        console.log(`/n DB is connected !! DB HOST : ${connectionInstance.connection.host}`);

    }catch (error){
        console.log("error",error);
        process.exit(1);
    }
}
export default connetDB;