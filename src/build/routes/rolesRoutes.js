"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rolesController_1 = require("../controllers/rolesController");
const auth_1 = require("../middleware/auth");
class RolesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosRoles/', rolesController_1.rolesController.mostrar_todos_roles);
        this.router.get('/mostrarRol/:id', rolesController_1.rolesController.listOne);
        this.router.post('/crearRol/', rolesController_1.rolesController.createRol);
        this.router.put('/actualizarRol/:id', rolesController_1.rolesController.actualizarRol);
        this.router.delete('/eliminarRol/:id', rolesController_1.rolesController.eliminarRol);
        this.router.get('/mostrarTodosRolesToken/', auth_1.validarToken, rolesController_1.rolesController.mostrar_todos_roles);
        this.router.get('/mostrarRolToken/:id', auth_1.validarToken, rolesController_1.rolesController.listOne);
        this.router.post('/crearRolToken/', auth_1.validarToken, rolesController_1.rolesController.createRol);
        this.router.put('/actualizarRolToken/:id', auth_1.validarToken, rolesController_1.rolesController.actualizarRol);
        this.router.delete('/eliminarRolToken/:id', auth_1.validarToken, rolesController_1.rolesController.eliminarRol);
    }
}
const rolesRoutes = new RolesRoutes();
exports.default = rolesRoutes.router;
