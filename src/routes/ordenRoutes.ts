import { Router } from 'express';
import { ordenController } from '../controllers/ordenController';
class OrdenRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodasOrdenes/',ordenController.mostrar_todos_ordenes);
        this.router.get('/mostrarOrden/:id',ordenController.listOne);
        this.router.put('/actualizarOrden/:id',ordenController.actualizarOrden);
        this.router.delete('/eliminarOrden/:id',ordenController.eliminarOrden);
        this.router.post('/crearOrden/',ordenController.createOrden);
        
    }
}
const ordenRoutes= new OrdenRoutes();
export default ordenRoutes.router;