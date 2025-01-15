import 'dotenv/config';
import routesSessions from './routes/sessions.js';
import userSessions from './routes/user.js';
import express from 'express';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';
import cors from 'cors';

const app = express();

// Configurar CORS para permitir cualquier origen
app.use(cors({
    origin: '*', // Aceptar solicitudes desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Middlewares para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/sessions', routesSessions);
app.use('/users', userSessions);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Server active on PORT: ' + PORT));
} catch (e) {
    console.log(e);
}

// Cerrar conexión a la base de datos al finalizar el proceso
process.on('SIGINT', async () => {
    await dbClient.discontent();
    process.exit(0);
});
