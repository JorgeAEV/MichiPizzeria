"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenController_1 = require("../controllers/ordenController");
class OrdenRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasOrdenes/', ordenController_1.ordenController.mostrar_todos_ordenes);
        this.router.get('/mostrarOrden/:id', ordenController_1.ordenController.listOne);
        this.router.put('/actualizarOrden/:id', ordenController_1.ordenController.actualizarOrden);
        this.router.delete('/eliminarOrden/:id', ordenController_1.ordenController.eliminarOrden);
        this.router.post('/crearOrden/', ordenController_1.ordenController.createOrden);
    }
}
const ordenRoutes = new OrdenRoutes();
exports.default = ordenRoutes.router;
