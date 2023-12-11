"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjetasController_1 = require("../controllers/tarjetasController");
const auth_1 = require("../middleware/auth");
class TarjetasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/mostrarTodasTarjetas/', tarjetasController_1.tarjetasController.mostrar_todas_tarjetas);
        this.router.get('/mostrarTarjeta/:id', tarjetasController_1.tarjetasController.listOne);
        this.router.put('/actualizarTarjeta/:id', tarjetasController_1.tarjetasController.actualizarTarjeta);
        this.router.delete('/eliminarTarjeta/:id', tarjetasController_1.tarjetasController.eliminarTarjeta);
        this.router.post('/crearTarjeta/', tarjetasController_1.tarjetasController.createTarjeta);
        this.router.get('/mostrarTodasTarjetasToken/', auth_1.validarToken, tarjetasController_1.tarjetasController.mostrar_todas_tarjetas);
        this.router.get('/mostrarTarjetaToken/:id', auth_1.validarToken, tarjetasController_1.tarjetasController.listOne);
        this.router.put('/actualizarTarjetaToken/:id', auth_1.validarToken, tarjetasController_1.tarjetasController.actualizarTarjeta);
        this.router.delete('/eliminarTarjetaToken/:id', auth_1.validarToken, tarjetasController_1.tarjetasController.eliminarTarjeta);
        this.router.post('/crearTarjetaToken/', auth_1.validarToken, tarjetasController_1.tarjetasController.createTarjeta);
    }
}
const tarjetasRoutes = new TarjetasRoutes();
exports.default = tarjetasRoutes.router;
