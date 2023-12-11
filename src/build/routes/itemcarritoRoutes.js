"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemcarritoController_1 = require("../controllers/itemcarritoController");
class ItemcarritoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosItems/', itemcarritoController_1.itemcarritoController.mostrar_todos_items);
        this.router.get('/mostrarItem/:id', itemcarritoController_1.itemcarritoController.listOne);
        this.router.put('/actualizarItem/:id', itemcarritoController_1.itemcarritoController.actualizarItem);
        this.router.delete('/eliminarItem/:id', itemcarritoController_1.itemcarritoController.eliminarItem);
        this.router.post('/crearItem/', itemcarritoController_1.itemcarritoController.createItem);
    }
}
const itemcarritoRoutes = new ItemcarritoRoutes();
exports.default = itemcarritoRoutes.router;
