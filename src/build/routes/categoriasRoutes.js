"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categoriasController_1 = require("../controllers/categoriasController");
const auth_1 = require("../middleware/auth");
class CategoriasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasCategorias/', categoriasController_1.categoriasController.mostrar_todos_categorias);
        this.router.get('/mostrarCategoria/:id', categoriasController_1.categoriasController.listOne);
        this.router.post('/crearCategoria/', categoriasController_1.categoriasController.createCategoria);
        this.router.put('/actualizarCategoria/:id', categoriasController_1.categoriasController.actualizarCategoria);
        this.router.delete('/eliminarCategoria/:id', categoriasController_1.categoriasController.eliminarCategoria);
        this.router.get('/mostrarTodasCategoriasToken/', auth_1.validarToken, categoriasController_1.categoriasController.mostrar_todos_categorias);
        this.router.get('/mostrarCategoriaToken/:id', auth_1.validarToken, categoriasController_1.categoriasController.listOne);
        this.router.post('/crearCategoriaToken/', auth_1.validarToken, categoriasController_1.categoriasController.createCategoria);
        this.router.put('/actualizarCategoriaToken/:id', auth_1.validarToken, categoriasController_1.categoriasController.actualizarCategoria);
        this.router.delete('/eliminarCategoriaToken/:id', auth_1.validarToken, categoriasController_1.categoriasController.eliminarCategoria);
    }
}
const categoriasRoutes = new CategoriasRoutes();
exports.default = categoriasRoutes.router;
