"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuariosController_1 = require("../controllers/usuariosController");
const auth_1 = require("../middleware/auth");
class UsuariosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosUsuarios/', usuariosController_1.usuariosController.mostrar_todos_usuarios);
        this.router.get('/mostrarUsuario/:id', usuariosController_1.usuariosController.listOne);
        this.router.put('/actualizarUsuario/:id', usuariosController_1.usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuario/:id', usuariosController_1.usuariosController.eliminarUsuario);
        this.router.post('/crearUsuario/', usuariosController_1.usuariosController.createUsuario);
        this.router.get('/listarUsuariosRol/:id', usuariosController_1.usuariosController.listarUsuariosRol);
        this.router.post('/validarUsuario/', usuariosController_1.usuariosController.ValidarUsuario);
        this.router.get('/mostrarTodosUsuariosToken/', auth_1.validarToken, usuariosController_1.usuariosController.mostrar_todos_usuarios);
        this.router.get('/mostrarUsuarioToken/:id', auth_1.validarToken, usuariosController_1.usuariosController.listOne);
        this.router.put('/actualizarUsuarioToken/:id', auth_1.validarToken, usuariosController_1.usuariosController.actualizarUsuario);
        this.router.delete('/eliminarUsuarioToken/:id', auth_1.validarToken, usuariosController_1.usuariosController.eliminarUsuario);
        this.router.post('/crearUsuarioToken/', auth_1.validarToken, usuariosController_1.usuariosController.createUsuario);
        this.router.get('/listarUsuariosRolToken/:id', auth_1.validarToken, usuariosController_1.usuariosController.listarUsuariosRol);
        this.router.post('/validarUsuarioToken/', auth_1.validarToken, usuariosController_1.usuariosController.ValidarUsuario);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
