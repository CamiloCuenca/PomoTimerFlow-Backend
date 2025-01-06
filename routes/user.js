import express from 'express';
import userController from '../controllers/user.js'
const route = express.Router();

route.post('/register' ,userController.register );
route.post('/login' ,userController.login );


export default route;

