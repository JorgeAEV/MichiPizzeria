import { Router } from 'express';
import { planesController } from '../controllers/planesController';
class PlanesRoutes
    {
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {

        this.router.get('/mostrarTodosPlanes/',planesController.mostrar_todos_planes);
        this.router.get('/mostrarPlan/:id',planesController.listOne);
        this.router.post('/crearPlan/',planesController.createPlan);
        this.router.put('/actualizarPlan/:id',planesController.actualizarPlan);
        this.router.delete('/eliminarPlan/:id',planesController.eliminarPlan);

    }
}
const planesRoutes= new PlanesRoutes();
export default planesRoutes.router;