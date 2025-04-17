import express from 'express'
import { getAlerts, updateAlert } from '../controllers/alert.controller.js'
const router = express.Router();


router.get('/', getAlerts);
router.put('/:id', updateAlert);


export default router;