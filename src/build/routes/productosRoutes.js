"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
const auth_1 = require("../middleware/auth");
class CategoriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodosProductos/', productosController_1.productosController.mostrar_todos_productos);
        this.router.get('/mostrarProducto/:id', productosController_1.productosController.listOne);
        this.router.post('/crearProducto/', productosController_1.productosController.createProducto);
        this.router.put('/actualizarProducto/:id', productosController_1.productosController.actualizarProducto);
        this.router.delete('/eliminarProducto/:id', productosController_1.productosController.eliminarProducto);
        this.router.get('/mostrarTodosProductosToken/', auth_1.validarToken, productosController_1.productosController.mostrar_todos_productos);
        this.router.get('/mostrarProductoToken/:id', auth_1.validarToken, productosController_1.productosController.listOne);
        this.router.post('/crearProductoToken/', auth_1.validarToken, productosController_1.productosController.createProducto);
        this.router.put('/actualizarProductoToken/:id', auth_1.validarToken, productosController_1.productosController.actualizarProducto);
        this.router.delete('/eliminarProductoToken/:id', auth_1.validarToken, productosController_1.productosController.eliminarProducto);
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;
