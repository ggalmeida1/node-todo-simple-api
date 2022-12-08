import { Router } from 'express';

import * as TodoController from '../models/Todo';


const router = Router();

router.get('/todo', TodoController.all)
router.post('/todo', TodoController.add)
router.put('/todo/:id', TodoController.update)
router.delete('/todo/:id', TodoController.delete)

export default router;