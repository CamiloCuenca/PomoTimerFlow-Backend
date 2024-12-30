import express from 'express';
import sessionsController from '../controllers/sessions.js'
const route = express.Router();

route.post('/' ,sessionsController.create );
route.get('/' , sessionsController.getAll);
route.get('/:id',sessionsController.getOne);
route.put('/:id' , sessionsController.update);
route.delete('/' ,sessionsController.delete);
route.delete('/:id' , sessionsController.delete);


export default route;

