import { Router } from 'express';
import { suscripcionesController } from '../controllers/suscripcionesController';
class SuscripcionRoutes
    {
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {

        this.router.get('/mostrarTodasSuscripciones/',suscripcionesController.mostrar_todos_suscripciones);
        this.router.get('/mostrarSuscripcion/:id',suscripcionesController.listOne);
        this.router.post('/crearSuscripcion/',suscripcionesController.createSuscripcion);
        this.router.put('/actualizarSuscripcion/:id',suscripcionesController.actualizarSuscripcion);
        this.router.delete('/eliminarSuscripcion/:id',suscripcionesController.eliminarSuscripcion);

    }
}
const suscripcionRoutes= new SuscripcionRoutes();
export default suscripcionRoutes.router;