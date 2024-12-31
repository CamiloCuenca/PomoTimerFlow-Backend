import { ObjectId } from 'mongodb';
import dbClient from '../config/dbClient.js';


class sessionModel{

    async create(Sessions){
        const colSessions = dbClient.db.collection('Sessions');
        return await colSessions.insertOne(Sessions
        )
    }

    async getAll(){
        const colSessions = dbClient.db.collection('Sessions');
        return await colSessions.find({}).toArray();
    }

    async getOne(id){
        const colSessions = dbClient.db.collection('Sessions');
        return await colSessions.findOne({_id : new ObjectId(id)});

    }

    async update(id,session){
        const colSessions = dbClient.db.collection('Sessions');
        return await colSessions.updateOne({_id : new ObjectId(id)},{$set: session});

    }

    async delete(id){
        const colSessions = dbClient.db.collection('Sessions');
        return await colSessions.deleteOne({_id : new ObjectId(id)});
    }
}

export default new sessionModel();
