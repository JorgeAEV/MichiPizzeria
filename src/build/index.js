"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const usuariosRoutes_1 = __importDefault(require("./routes/usuariosRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const categoriasRoutes_1 = __importDefault(require("./routes/categoriasRoutes"));
const productosRoutes_1 = __importDefault(require("./routes/productosRoutes"));
const planesRoutes_1 = __importDefault(require("./routes/planesRoutes"));
const resenasRoutes_1 = __importDefault(require("./routes/resenasRoutes"));
const suscripcionesRoutes_1 = __importDefault(require("./routes/suscripcionesRoutes"));
const valoracionesRoutes_1 = __importDefault(require("./routes/valoracionesRoutes"));
const sesioncompraRoutes_1 = __importDefault(require("./routes/sesioncompraRoutes"));
const itemcarritoRoutes_1 = __importDefault(require("./routes/itemcarritoRoutes"));
const carritoRoutes_1 = __importDefault(require("./routes/carritoRoutes"));
const ordenRoutes_1 = __importDefault(require("./routes/ordenRoutes"));
const pagosRoutes_1 = __importDefault(require("./routes/pagosRoutes"));
const tarjetasRoutes_1 = __importDefault(require("./routes/tarjetasRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
        this.app.use('/documentacion', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //En que puerto va a ejecutar
        this.app.use((0, morgan_1.default)('dev')); //que ejecutamos y que tiempo
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //permite que utilicemos json
        this.app.use(express_1.default.urlencoded({ extended: false })); //decodifca las url
    }
    routes() {
        this.app.use('/api/usuarios', usuariosRoutes_1.default);
        this.app.use('/api/roles', rolesRoutes_1.default);
        this.app.use('/api/productos', productosRoutes_1.default);
        this.app.use('/api/categorias', categoriasRoutes_1.default);
        this.app.use('/api/planes', planesRoutes_1.default);
        this.app.use('/api/resenas', resenasRoutes_1.default);
        this.app.use('/api/suscripciones', suscripcionesRoutes_1.default);
        this.app.use('/api/valoraciones', valoracionesRoutes_1.default);
        this.app.use('/api/sesioncompra', sesioncompraRoutes_1.default);
        this.app.use('/api/itemcarrito', itemcarritoRoutes_1.default);
        this.app.use('/api/carrito', carritoRoutes_1.default);
        this.app.use('/api/orden', ordenRoutes_1.default);
        this.app.use('/api/pagos', pagosRoutes_1.default);
        this.app.use('/api/tarjetas', tarjetasRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('El servidor se esta ejecutando en el puerto: ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
