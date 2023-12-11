import { Router } from 'express';
import { valoracionesController } from '../controllers/valoracionesController';
import { validarToken } from '../middleware/auth'

class ValoracionRoutes
    {
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {

        this.router.get('/mostrarTodasValoraciones/',valoracionesController.mostrar_todos_Valoraciones);
        this.router.get('/mostrarValoracion/:id',valoracionesController.listOne);
        this.router.post('/crearValoracion/',valoracionesController.createValoracion);
        this.router.put('/actualizarValoracion/:id',valoracionesController.actualizarValoracion);
        this.router.delete('/eliminarValoracion/:id',valoracionesController.eliminarValoracion);

        this.router.get('/mostrarTodasValoracionesToken/',validarToken,valoracionesController.mostrar_todos_Valoraciones);
        this.router.get('/mostrarValoracionToken/:id',validarToken,valoracionesController.listOne);
        this.router.post('/crearValoracionToken/',validarToken,valoracionesController.createValoracion);
        this.router.put('/actualizarValoracionToken/:id',validarToken,valoracionesController.actualizarValoracion);
        this.router.delete('/eliminarValoracionToken/:id',validarToken,valoracionesController.eliminarValoracion);

    }
}
const valoracionRoutes= new ValoracionRoutes();
export default valoracionRoutes.router;