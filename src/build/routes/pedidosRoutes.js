"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidosController_1 = require("../controllers/pedidosController");
class PedidoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosPedidos/', pedidosController_1.pedidosController.mostrar_todos_Pedidos);
        this.router.get('/mostrarPedido/:id', pedidosController_1.pedidosController.listOne);
        this.router.post('/crearPedido/', pedidosController_1.pedidosController.createPedido);
        this.router.put('/actualizarPedido/:id', pedidosController_1.pedidosController.actualizarPedido);
        this.router.delete('/eliminarPedido/:id', pedidosController_1.pedidosController.eliminarPedido);
    }
}
const pedidoRoutes = new PedidoRoutes();
exports.default = pedidoRoutes.router;
