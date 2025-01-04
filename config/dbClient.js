import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';


class dbClient {

    constructor() {
        this.connect()
    }

    // Metodo para crear la conexión
    async connect(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_BD}/PomoTimerFlow?retryWrites=true&w=majority`;
        await mongoose.connect(queryString);
        console.log('Conectado a la base de datos')
      
    }

    // Método para ccerrar la conexión
    async discontent(){
        try{

            await mongoose.disconnect();
            console.log("Conexión a  la base de datos cerrada");


        }catch(e){
            console.log("Error al cerrar la conexión" + e)
        }
    }


   /* async connectDB(){
        try{

           await this.client.connect();
           this.db = this.client.db('Pomodoro');
           console.log("Conectado al servidor de base de datos")
        }catch(e){
            console.log(e);
        }
    } */
}

export default new dbClient();