import { Router } from 'express';
import { pagosController } from '../controllers/pagosController';
import { validarToken } from '../middleware/auth'

class PagosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodosPagos/',pagosController.mostrar_todos_pagos);
        this.router.get('/mostrarPago/:id',pagosController.listOne);
        this.router.put('/actualizarPago/:id',pagosController.actualizarPago);
        this.router.delete('/eliminarPago/:id',pagosController.eliminarPago);
        this.router.post('/crearPago/',pagosController.createPago);

        this.router.get('/mostrarTodosPagosToken/',validarToken,pagosController.mostrar_todos_pagos);
        this.router.get('/mostrarPagoToken/:id',validarToken,pagosController.listOne);
        this.router.put('/actualizarPagoToken/:id',validarToken,pagosController.actualizarPago);
        this.router.delete('/eliminarPagoToken/:id',validarToken,pagosController.eliminarPago);
        this.router.post('/crearPagoToken/',validarToken,pagosController.createPago);
    }
}
const pagosRoutes= new PagosRoutes();
export default pagosRoutes.router;