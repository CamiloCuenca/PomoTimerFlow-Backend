import 'dotenv/config';
import routesSessions from "./routes/sessions.js"
import userSessions from "./routes/user.js"
import express from 'express';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/sessions' , routesSessions);
app.use('/users' , userSessions);


try{

    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=> console.log('server active on PORT:' + PORT))

}catch(e){
console.log(e)
}


process.on('SIGINT',async()=>{
    dbClient.discontent();
    process.exit(0);
});
