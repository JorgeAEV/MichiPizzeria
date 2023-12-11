"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const planesController_1 = require("../controllers/planesController");
class PlanesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPlanes/', planesController_1.planesController.mostrar_todos_planes);
        this.router.get('/mostrarPlan/:id', planesController_1.planesController.listOne);
        this.router.post('/crearPlan/', planesController_1.planesController.createPlan);
        this.router.put('/actualizarPlan/:id', planesController_1.planesController.actualizarPlan);
        this.router.delete('/eliminarPlan/:id', planesController_1.planesController.eliminarPlan);
    }
}
const planesRoutes = new PlanesRoutes();
exports.default = planesRoutes.router;
