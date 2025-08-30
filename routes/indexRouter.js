import { Router } from 'express';
import { getMessages, getSelectedMessage, postNewMessage } from '../controllers/usersController.js';

const indexRouter = Router();

indexRouter.get('/', getMessages);
indexRouter.get('/:user', getSelectedMessage);
indexRouter.post('/new', postNewMessage);

export default indexRouter;