import {Router} from 'express';
import NotFoundError from '../errors/NotFound.js';

const router = Router();

router.use((req, res, next) => {
  next(new NotFoundError('The requested resource was not found'));
});

export default router;
