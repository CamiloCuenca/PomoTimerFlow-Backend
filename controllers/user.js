import UserModel from '../models/user.js';
import bcrypt from 'bcrypt'
import JWT  from 'jsonwebtoken';
import { generateToken } from '../helpers/authentication.js';

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

        const {email, password} = req.body;

        const userExists = await UserModel.getOne({email});
        
        if(!userExists){
            return res.status(400).json({error:'El usuario NO existe'});
        }

        const  validPassword = await bcrypt.compare(password,userExists.password);

        if(!validPassword){
            return res.status(400).json({error:'La contraseña no es valida'});

        }

        const token = generateToken(email);
        return res.status(200).json({msg:'Ususario autenticado',token});



    }
    



}

export default new UserController();