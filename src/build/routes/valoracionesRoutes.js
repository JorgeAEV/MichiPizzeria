"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const valoracionesController_1 = require("../controllers/valoracionesController");
const auth_1 = require("../middleware/auth");
class ValoracionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasValoraciones/', valoracionesController_1.valoracionesController.mostrar_todos_Valoraciones);
        this.router.get('/mostrarValoracion/:id', valoracionesController_1.valoracionesController.listOne);
        this.router.post('/crearValoracion/', valoracionesController_1.valoracionesController.createValoracion);
        this.router.put('/actualizarValoracion/:id', valoracionesController_1.valoracionesController.actualizarValoracion);
        this.router.delete('/eliminarValoracion/:id', valoracionesController_1.valoracionesController.eliminarValoracion);
        this.router.get('/mostrarTodasValoracionesToken/', auth_1.validarToken, valoracionesController_1.valoracionesController.mostrar_todos_Valoraciones);
        this.router.get('/mostrarValoracionToken/:id', auth_1.validarToken, valoracionesController_1.valoracionesController.listOne);
        this.router.post('/crearValoracionToken/', auth_1.validarToken, valoracionesController_1.valoracionesController.createValoracion);
        this.router.put('/actualizarValoracionToken/:id', auth_1.validarToken, valoracionesController_1.valoracionesController.actualizarValoracion);
        this.router.delete('/eliminarValoracionToken/:id', auth_1.validarToken, valoracionesController_1.valoracionesController.eliminarValoracion);
    }
}
const valoracionRoutes = new ValoracionRoutes();
exports.default = valoracionRoutes.router;
