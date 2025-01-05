import Sessions from "../schemas/sessions.js";
import mongoose from "mongoose";


class sessionModel{

    async create(sessions){
        return await Sessions.create(sessions);
    }

    async getAll(){
        return await Sessions.find();
    }

    async getOne(id){
        return await Sessions.findById(id);

    }

    async update(id,session){
       return await Sessions.findOneAndUpdate({ _id: new mongoose.Types.ObjectId(id)},session,{new: true});

    }

    async delete(id){
        return await Sessions.findOneAndDelete({ _id: new mongoose.Types.ObjectId(id)});
    }
}

export default new sessionModel();
