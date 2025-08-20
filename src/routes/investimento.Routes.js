import express from 'express';
import * as investimentoController from '../controllers/investimentoController.js';

const router = express.Router();

router.post('/', investimentoController.criarInvestimento);

router.put('/:investimentoId', investimentoController.atualizarInvestimento);

router.delete('/:investimentoId', investimentoController.deletarInvestimento);

router.get('/', investimentoController.buscarTodosInvestimentos);

router.get('/:investimentoId', investimentoController.buscarInvestimentoPorId);

export default router;