import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interfatchs";



const userSchema= new Schema<IUser>({
    firstName:{

    type:String,
    required:true,
    trim:true
    },
    lastName:{
    type:String,
    required:true,
    trim:true
    },

email:{
    type:String,
    required:true,
    trim:true

},
password:{
    type:String,
    required:true,
    trim:true
 
},
role:{
    type:String,
   enum:['user','admin'],
   default:'user'



}


})
export const User= model("User",userSchema)