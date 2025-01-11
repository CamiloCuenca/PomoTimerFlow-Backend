import express from 'express';
import sessionsController from '../controllers/sessions.js'
import verifyToken from '../helpers/authentication.js'

const route = express.Router();


route.post('/' ,sessionsController.create );
route.get('/' , sessionsController.getAll);
route.get('/:id',sessionsController.getOne);
route.put('/:id' ,verifyToken , sessionsController.update);
route.delete('/:id' ,verifyToken, sessionsController.delete);


export default route;

