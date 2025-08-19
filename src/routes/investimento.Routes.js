import express from 'express';
import investimentoController from '../controllers/investimentoController.js'

const router = express.Router();

router.post('/', investimentoController);

router.put('/:investimentoId', investimentoController);

router.delete('/:investimentoId', investimentoController)

router.get('/', investimentoController);

router.get('/:investimentoId', investimentoController);


export default router;