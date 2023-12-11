"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resenasController_1 = require("../controllers/resenasController");
const auth_1 = require("../middleware/auth");
class ResenasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosResenas/', resenasController_1.resenasController.mostrar_todos_resenas);
        this.router.get('/mostrarResena/:id', resenasController_1.resenasController.listOne);
        this.router.post('/crearResena/', resenasController_1.resenasController.createResena);
        this.router.put('/actualizarResena/:id', resenasController_1.resenasController.actualizarResena);
        this.router.delete('/eliminarResena/:id', resenasController_1.resenasController.eliminarResena);
        this.router.get('/mostrarTodosResenasToken/', auth_1.validarToken, resenasController_1.resenasController.mostrar_todos_resenas);
        this.router.get('/mostrarResenaToken/:id', auth_1.validarToken, resenasController_1.resenasController.listOne);
        this.router.post('/crearResenaToken/', auth_1.validarToken, resenasController_1.resenasController.createResena);
        this.router.put('/actualizarResenaToken/:id', auth_1.validarToken, resenasController_1.resenasController.actualizarResena);
        this.router.delete('/eliminarResenaToken/:id', auth_1.validarToken, resenasController_1.resenasController.eliminarResena);
    }
}
const resenasRoutes = new ResenasRoutes();
exports.default = resenasRoutes.router;
