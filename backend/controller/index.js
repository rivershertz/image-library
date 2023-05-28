import {Router} from 'express';
import route404 from './route404.js';
import {paginateToNext, paginateToPrev, getImages} from '../services/images.js';

const router = Router();
router.get('/', getImages);
router.get('/next', paginateToNext);
router.get('/prev', paginateToPrev);
router.use('*', route404);

export default router;
