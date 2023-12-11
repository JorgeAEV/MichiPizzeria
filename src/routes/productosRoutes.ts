import { Router } from 'express';
import { productosController } from '../controllers/productosController';
import { validarToken } from '../middleware/auth'

class CategoriasRoutes
    {
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {

        this.router.get('/mostrarTodosProductos/',productosController.mostrar_todos_productos);
        this.router.get('/mostrarProducto/:id',productosController.listOne);
        this.router.post('/crearProducto/',productosController.createProducto);
        this.router.put('/actualizarProducto/:id',productosController.actualizarProducto);
        this.router.delete('/eliminarProducto/:id',productosController.eliminarProducto);

        this.router.get('/mostrarTodosProductosToken/',validarToken,productosController.mostrar_todos_productos);
        this.router.get('/mostrarProductoToken/:id',validarToken,productosController.listOne);
        this.router.post('/crearProductoToken/',validarToken,productosController.createProducto);
        this.router.put('/actualizarProductoToken/:id',validarToken,productosController.actualizarProducto);
        this.router.delete('/eliminarProductoToken/:id',validarToken,productosController.eliminarProducto);

    }
}
const categoriasRoutes= new CategoriasRoutes();
export default categoriasRoutes.router;