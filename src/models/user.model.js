 import mongoose, { Schema } from "mongoose";
 import jwt from "jsonwebtoken";
 import bcrypt from "bcryptjs";
 
 const userSchema = new Schema({
     username: {
         type: String,
         require: true,
         unique : true,
         lowercase: true,
         trim: true,
         index : true
     },
     email:{
         type: String,
         require: true,
         unique : true,
         lowercase: true,
         trim: true,
         
     },
     fullname: {
         type: String,
         require: true,
         trim: true, 
         index: true
     },
     avatar:{
         type: String,
         require: true,
     },
     coverImage: {
         type: String
     },
     watchHistory : [
         {
         type : Schema.Types.ObjectId,
         ref: "Video"
         }
         
     ],
     password: {
         type: String,
         required: [true,"password is required "]
     },
     RefershToken:{
         type: String
     }
 
     },
     {
     timestamps:true
     }
 
 )

 userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next(); 
    this.password = bcrypt.hash(this.password,10)
    next()
 })

 userSchema.method.ispassword = async function(password){
  return await bcrypt.compare(password,this.password)
 }
 userSchema.method.genrateAccessToken = function(){
    jwt.sign({
        _id : this.id,
        username: this.username,
        email: this.email,
        fullname: this.fullname
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
)
 }

 userSchema.method.genreateRefreshToken = function(){
    jwt.sign({
        _id : this.id,
    },
    process.env.REFERSH_TOKEN_SECRET,
    {
        expiresIn:process.env.REFERSH_TOKEN_EXPIRY
    }
)
 }
 export const User = mongoose.model("User",userSchema)