import sessionModel from '../models/sessions.js';

class sessionsController {
    constructor(){
        
    }

    async create(req, res){

        try{

            const data = await sessionModel.create(req.body);
            res.status(201).json(data);

        }catch(e){

            res.status(500).send(e)

        }

    }

    async update(req, res){

        try{
            const {id} = req.params;
            const data = await sessionModel.update(id,req.body);
            res.status(200).json(data);

        }catch(e){

            res.status(500).send(e)

        }
    }

    async delete(req, res){

        try{

            const {id} = req.params;
            const data = await sessionModel.delete(id);
            res.status(206).json(data);

        }catch(e){

            res.status(500).send(e)

        }

    }
    

    async getAll(req, res){

        try{
            const data = await sessionModel.getAll();
            res.status(201).json(data);

        }catch(e){

            res.status(500).send(e)

        }

    }

    async getOne(req, res){

        try{
            const {id} = req.params;
            const data = await sessionModel.getOne(id);

            res.status(201).json(data);

        }catch(e){

            res.status(500).send(e)

        }
    }
}


export default  new sessionsController();

