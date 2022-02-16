import { Router } from 'express';
const router = Router();

import { check } from '../middlewares/token.js';
import { upload } from '../middlewares/multer.js';

import { create } from '../controllers/image.ctrl.js';



router.post('/', upload, create);

export default router;