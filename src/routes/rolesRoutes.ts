import { Router } from 'express';
import { rolesController } from '../controllers/rolesController';
import { validarToken } from '../middleware/auth'
class RolesRoutes
    {
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {

        this.router.get('/mostrarTodosRoles/',rolesController.mostrar_todos_roles);
        this.router.get('/mostrarRol/:id',rolesController.listOne);
        this.router.post('/crearRol/',rolesController.createRol);
        this.router.put('/actualizarRol/:id',rolesController.actualizarRol);
        this.router.delete('/eliminarRol/:id',rolesController.eliminarRol);

        this.router.get('/mostrarTodosRolesToken/',validarToken,rolesController.mostrar_todos_roles);
        this.router.get('/mostrarRolToken/:id',validarToken,rolesController.listOne);
        this.router.post('/crearRolToken/',validarToken,rolesController.createRol);
        this.router.put('/actualizarRolToken/:id',validarToken,rolesController.actualizarRol);
        this.router.delete('/eliminarRolToken/:id',validarToken,rolesController.eliminarRol);

    }
}
const rolesRoutes= new RolesRoutes();
export default rolesRoutes.router;