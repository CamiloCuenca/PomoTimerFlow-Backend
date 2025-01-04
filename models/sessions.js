import Sessions from "../schemas/sessions.js";


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
       return await Sessions.findOneAndUpdate(id,session,{new: true});

    }

    async delete(id){
        return await Sessions.findOneAndDelete(id);
    }
}

export default new sessionModel();
