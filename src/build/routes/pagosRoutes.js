"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pagosController_1 = require("../controllers/pagosController");
const auth_1 = require("../middleware/auth");
class PagosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPagos/', pagosController_1.pagosController.mostrar_todos_pagos);
        this.router.get('/mostrarPago/:id', pagosController_1.pagosController.listOne);
        this.router.put('/actualizarPago/:id', pagosController_1.pagosController.actualizarPago);
        this.router.delete('/eliminarPago/:id', pagosController_1.pagosController.eliminarPago);
        this.router.post('/crearPago/', pagosController_1.pagosController.createPago);
        this.router.get('/mostrarTodosPagosToken/', auth_1.validarToken, pagosController_1.pagosController.mostrar_todos_pagos);
        this.router.get('/mostrarPagoToken/:id', auth_1.validarToken, pagosController_1.pagosController.listOne);
        this.router.put('/actualizarPagoToken/:id', auth_1.validarToken, pagosController_1.pagosController.actualizarPago);
        this.router.delete('/eliminarPagoToken/:id', auth_1.validarToken, pagosController_1.pagosController.eliminarPago);
        this.router.post('/crearPagoToken/', auth_1.validarToken, pagosController_1.pagosController.createPago);
    }
}
const pagosRoutes = new PagosRoutes();
exports.default = pagosRoutes.router;
