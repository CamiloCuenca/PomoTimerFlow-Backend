import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(

    {
        email: {

            type: String,
            required:true,
            unique:true,
            trim: true
        },
        name:{
            type:String,
            required: true,
            trim: true

        },
        password:{
            type:String,
            required:true
        }
    }
)


export default mongoose.model('User',userSchema);
