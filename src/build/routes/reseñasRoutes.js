"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rese_asController_1 = require("../controllers/rese\u00F1asController");
class ReseñasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosResenas/', rese_asController_1.reseñasController.mostrar_todos_resenas);
        this.router.get('/mostrarResena/:id', rese_asController_1.reseñasController.listOne);
        this.router.post('/crearResena/', rese_asController_1.reseñasController.createResena);
        this.router.put('/actualizarResena/:id', rese_asController_1.reseñasController.actualizarResena);
        this.router.delete('/eliminarResena/:id', rese_asController_1.reseñasController.eliminarResena);
    }
}
const reseñasRoutes = new ReseñasRoutes();
exports.default = reseñasRoutes.router;
