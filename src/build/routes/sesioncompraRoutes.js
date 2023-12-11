"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sesioncompraController_1 = require("../controllers/sesioncompraController");
class SesioncompraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasSesiones/', sesioncompraController_1.sesioncompraController.mostrar_todas_sesiones);
        this.router.get('/mostrarSesion/:id', sesioncompraController_1.sesioncompraController.listOne);
        this.router.put('/actualizarSesion/:id', sesioncompraController_1.sesioncompraController.actualizarSesion);
        this.router.delete('/eliminarSesion/:id', sesioncompraController_1.sesioncompraController.eliminarSesion);
        this.router.post('/crearSesion/', sesioncompraController_1.sesioncompraController.createSesion);
    }
}
const sesioncompraRoutes = new SesioncompraRoutes();
exports.default = sesioncompraRoutes.router;
