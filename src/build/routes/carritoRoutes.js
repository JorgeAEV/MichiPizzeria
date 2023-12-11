"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoController_1 = require("../controllers/carritoController");
class CarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosCarritos/', carritoController_1.carritoController.mostrar_todos_carritos);
        this.router.get('/mostrarCarrito/:id', carritoController_1.carritoController.listOne);
        this.router.put('/actualizarCarrito/:id', carritoController_1.carritoController.actualizarCarrito);
        this.router.delete('/eliminarCarrito/:id', carritoController_1.carritoController.eliminarCarrito);
        this.router.post('/crearCarrito/', carritoController_1.carritoController.createCarrito);
    }
}
const carritoRoutes = new CarritoRoutes();
exports.default = carritoRoutes.router;
