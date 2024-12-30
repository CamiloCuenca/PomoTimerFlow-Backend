import 'dotenv/config';
import routesSessions from "./routes/sessions.js"
import express from 'express';


const app = express();

app.use('/sessions' , routesSessions);

try{

    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=> console.log('server active on PORT:' + PORT))

}catch(e){
console.log(e)
}

