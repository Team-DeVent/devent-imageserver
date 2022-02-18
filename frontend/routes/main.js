import { Router } from 'express';
const router = Router();

router.get('/', function(req, res) {
    res.render('index')
});

router.get('/about', function(req, res) {
    res.render('page/about')
});

export default router;