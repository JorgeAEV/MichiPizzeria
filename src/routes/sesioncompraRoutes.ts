import { Router } from 'express';
import { sesioncompraController } from '../controllers/sesioncompraController';
class SesioncompraRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodasSesiones/',sesioncompraController.mostrar_todas_sesiones);
        this.router.get('/mostrarSesion/:id',sesioncompraController.listOne);
        this.router.put('/actualizarSesion/:id',sesioncompraController.actualizarSesion);
        this.router.delete('/eliminarSesion/:id',sesioncompraController.eliminarSesion);
        this.router.post('/crearSesion/',sesioncompraController.createSesion);
        
    }
}
const sesioncompraRoutes= new SesioncompraRoutes();
export default sesioncompraRoutes.router;