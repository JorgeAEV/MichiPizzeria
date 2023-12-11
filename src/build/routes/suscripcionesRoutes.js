"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const suscripcionesController_1 = require("../controllers/suscripcionesController");
class SuscripcionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasSuscripciones/', suscripcionesController_1.suscripcionesController.mostrar_todos_suscripciones);
        this.router.get('/mostrarSuscripcion/:id', suscripcionesController_1.suscripcionesController.listOne);
        this.router.post('/crearSuscripcion/', suscripcionesController_1.suscripcionesController.createSuscripcion);
        this.router.put('/actualizarSuscripcion/:id', suscripcionesController_1.suscripcionesController.actualizarSuscripcion);
        this.router.delete('/eliminarSuscripcion/:id', suscripcionesController_1.suscripcionesController.eliminarSuscripcion);
    }
}
const suscripcionRoutes = new SuscripcionRoutes();
exports.default = suscripcionRoutes.router;
