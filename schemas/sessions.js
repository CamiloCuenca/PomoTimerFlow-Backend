import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        
        type:{
            type: String,
            require: true
        },
        date:{
            type:Date,
            require: true
        }

    },{timestamps: true}
);

export default mongoose.model('Sessions',sessionSchema);