import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
    {
        
        type:{
            type: String,
            required: true,
            enum:[
                'Rest','Work'
            ]
        },
        date:{
            type:Date,
            required: true
        }

    },{timestamps: true}
);

export default mongoose.model('Sessions',sessionSchema);