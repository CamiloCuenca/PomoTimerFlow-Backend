import express from 'express';
import userController from '../controllers/user.js'
import verifyToken from '../helpers/authentication.js';
const route = express.Router();

route.post('/register' ,userController.register );
route.post('/login' ,userController.login );
route.get('/profile',verifyToken,userController.profile)


export default route;

