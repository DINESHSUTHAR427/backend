import{v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRET'

});

const uploadOnCloudinary = async (localFilPath) => {
    try{
        if(!localFilPath) return null;
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilPath,{
            resource_type: "auto"
        })
        //file has been uploaded successfull
        console.log("file is upload in cloud",response.url)
        return response;
    }catch(error){
        fs.unlinkSync(localFilPath)//remove the locally saved temporary file as the upload operation got faild
        return null;
    }
}

export {uploadOnCloudinary};
 