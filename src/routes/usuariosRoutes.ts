import { Router } from 'express';
import { usuariosController } from '../controllers/usuariosController';
import { validarToken } from '../middleware/auth'

class UsuariosRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodosUsuarios/',usuariosController.mostrar_todos_usuarios);
        this.router.get('/mostrarUsuario/:id',usuariosController.listOne);
        this.router.put('/actualizarUsuario/:id',usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuario/:id',usuariosController.eliminarUsuario);
        this.router.post('/crearUsuario/',usuariosController.createUsuario);
        this.router.get('/listarUsuariosRol/:id',usuariosController.listarUsuariosRol);
        this.router.post('/validarUsuario/',usuariosController.ValidarUsuario);

        this.router.get('/mostrarTodosUsuariosToken/',validarToken,usuariosController.mostrar_todos_usuarios);
        this.router.get('/mostrarUsuarioToken/:id',validarToken,usuariosController.listOne);
        this.router.put('/actualizarUsuarioToken/:id',validarToken,usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuarioToken/:id',validarToken,usuariosController.eliminarUsuario);
        this.router.post('/crearUsuarioToken/',validarToken,usuariosController.createUsuario);
        this.router.get('/listarUsuariosRolToken/:id',validarToken,usuariosController.listarUsuariosRol);
        this.router.post('/validarUsuarioToken/',validarToken,usuariosController.ValidarUsuario);
    }
}
const usuariosRoutes= new UsuariosRoutes();
export default usuariosRoutes.router;