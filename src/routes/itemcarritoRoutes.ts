import { Router } from 'express';
import { itemcarritoController } from '../controllers/itemcarritoController';
class ItemcarritoRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodosItems/',itemcarritoController.mostrar_todos_items);
        this.router.get('/mostrarItem/:id',itemcarritoController.listOne);
        this.router.put('/actualizarItem/:id',itemcarritoController.actualizarItem);
        this.router.delete('/eliminarItem/:id',itemcarritoController.eliminarItem);
        this.router.post('/crearItem/',itemcarritoController.createItem);
        
    }
}
const itemcarritoRoutes= new ItemcarritoRoutes();
export default itemcarritoRoutes.router;