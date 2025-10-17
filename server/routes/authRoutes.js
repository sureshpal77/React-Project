import express from 'express';
import {register ,login} from '../controllers/authController.js'


const router = express.Router();


router.post('/register', register);
router.post('/login', login);



router.get('/failure', (req, res) => {
    res.status(401).json({ message: 'Invalid credentials' });
});

export default router;