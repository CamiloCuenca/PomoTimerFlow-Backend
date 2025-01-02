import 'dotenv/config';
import routesSessions from "./routes/sessions.js"
import express from 'express';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/pomo' , routesSessions);

try{

    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=> console.log('server active on PORT:' + PORT))

}catch(e){
console.log(e)
}

