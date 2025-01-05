import UserModel from '../models/user.js';
import bcrypt from 'bcrypt'

class UserController {
    constructor(){
        
    }

    async register(req,res){
        try{
                const {email,name,password} =req.body;
                const userExists = await UserModel.getOne({email});

                if(userExists){
                    return res.status(400).json({error:'El usuario ya existe'});
                }

                 const encryptedPassword =  await bcrypt.hash(password,10);

                const data = await UserModel.create({
                    email,
                    name,
                    password: encryptedPassword

                });
                res.status(201).json(data);

            }catch(e){

                console.log(e)
                res.status(500).send(e)

            }
    }

    async login(req,res){

    }
    



}

export default new UserController();