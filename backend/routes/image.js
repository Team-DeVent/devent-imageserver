import { Router } from 'express';
const router = Router();

import { check } from '../middlewares/token.js';
import { upload } from '../middlewares/multer.js';

import { create, read } from '../controllers/image.ctrl.js';


router.post('/', check, upload, create);

router.get('/', read);

export default router;