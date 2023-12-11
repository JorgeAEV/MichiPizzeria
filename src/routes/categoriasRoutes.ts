import { Router } from 'express';
import { categoriasController } from '../controllers/categoriasController';
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

        this.router.get('/mostrarTodasCategorias/',categoriasController.mostrar_todos_categorias);
        this.router.get('/mostrarCategoria/:id',categoriasController.listOne);
        this.router.post('/crearCategoria/',categoriasController.createCategoria);
        this.router.put('/actualizarCategoria/:id',categoriasController.actualizarCategoria);
        this.router.delete('/eliminarCategoria/:id',categoriasController.eliminarCategoria);

        this.router.get('/mostrarTodasCategoriasToken/',validarToken,categoriasController.mostrar_todos_categorias);
        this.router.get('/mostrarCategoriaToken/:id',validarToken,categoriasController.listOne);
        this.router.post('/crearCategoriaToken/',validarToken,categoriasController.createCategoria);
        this.router.put('/actualizarCategoriaToken/:id',validarToken,categoriasController.actualizarCategoria);
        this.router.delete('/eliminarCategoriaToken/:id',validarToken,categoriasController.eliminarCategoria);
    }
}
const categoriasRoutes= new CategoriasRoutes();
export default categoriasRoutes.router;