import { Router } from 'express';
const router = Router();

import image from './routes/image.js';


router.use('/images', image);


export default router;