import mongoose from "mongoose"
const userSchema=new mongoose.Schema({
    username:{
        first_name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        },
        last_name:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
        },
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})
export const user=mongoose.model("user",userSchema)