import { Router } from 'express';
import { carritoController } from '../controllers/carritoController';
class CarritoRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodosCarritos/',carritoController.mostrar_todos_carritos);
        this.router.get('/mostrarCarrito/:id',carritoController.listOne);
        this.router.put('/actualizarCarrito/:id',carritoController.actualizarCarrito);
        this.router.delete('/eliminarCarrito/:id',carritoController.eliminarCarrito);
        this.router.post('/crearCarrito/',carritoController.createCarrito);
        
    }
}
const carritoRoutes= new CarritoRoutes();
export default carritoRoutes.router;