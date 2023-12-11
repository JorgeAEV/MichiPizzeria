import { Router } from 'express';
import { resenasController } from '../controllers/resenasController';
import { validarToken } from '../middleware/auth'

class ResenasRoutes
    {
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {

        this.router.get('/mostrarTodosResenas/',resenasController.mostrar_todos_resenas);
        this.router.get('/mostrarResena/:id',resenasController.listOne);
        this.router.post('/crearResena/',resenasController.createResena);
        this.router.put('/actualizarResena/:id',resenasController.actualizarResena);
        this.router.delete('/eliminarResena/:id',resenasController.eliminarResena);


        this.router.get('/mostrarTodosResenasToken/',validarToken,resenasController.mostrar_todos_resenas);
        this.router.get('/mostrarResenaToken/:id',validarToken,resenasController.listOne);
        this.router.post('/crearResenaToken/',validarToken,resenasController.createResena);
        this.router.put('/actualizarResenaToken/:id',validarToken,resenasController.actualizarResena);
        this.router.delete('/eliminarResenaToken/:id',validarToken,resenasController.eliminarResena);

    }
}
const resenasRoutes= new ResenasRoutes();
export default resenasRoutes.router;