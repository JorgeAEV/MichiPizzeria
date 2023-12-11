import express, {Application} from 'express';
import swagger_ui_express from 'swagger-ui-express';

import usuariosRoutes from './routes/usuariosRoutes';
import rolesRoutes from './routes/rolesRoutes';
import categoriasRoutes from './routes/categoriasRoutes';
import productosRoutes from './routes/productosRoutes';
import planesRoutes from './routes/planesRoutes';
import reseñasRoutes from './routes/resenasRoutes';
import suscripcionesRoutes from './routes/suscripcionesRoutes';
import valoracionesRoutes from './routes/valoracionesRoutes';
import sesioncompraRoutes from './routes/sesioncompraRoutes';
import itemcarritoRoutes from './routes/itemcarritoRoutes';
import carritoRoutes from './routes/carritoRoutes';
import ordenRoutes from './routes/ordenRoutes';
import pagosRoutes from './routes/pagosRoutes';
import tarjetasRoutes from './routes/tarjetasRoutes';

import morgan from 'morgan';
import cors from 'cors';
import swaggerDocument from './swagger.json';
class Server
{
public app: Application;
constructor()
{
this.app= express();
this.config();
this.routes();
this.app.use('/documentacion',swagger_ui_express.serve, swagger_ui_express.setup(swaggerDocument));
}

config (): void
{
this.app.set('port',process.env.PORT|| 3000); //En que puerto va a ejecutar
this.app.use(morgan('dev')); //que ejecutamos y que tiempo
this.app.use(cors());
this.app.use(express.json()); //permite que utilicemos json
this.app.use(express.urlencoded({extended: false})); //decodifca las url
}
routes (): void
{
    this.app.use('/api/usuarios',usuariosRoutes);
    this.app.use('/api/roles',rolesRoutes);
    this.app.use('/api/productos',productosRoutes);
    this.app.use('/api/categorias',categoriasRoutes);
    this.app.use('/api/planes',planesRoutes);
    this.app.use('/api/resenas',reseñasRoutes);
    this.app.use('/api/suscripciones',suscripcionesRoutes);
    this.app.use('/api/valoraciones',valoracionesRoutes);
    this.app.use('/api/sesioncompra',sesioncompraRoutes);
    this.app.use('/api/itemcarrito',itemcarritoRoutes);
    this.app.use('/api/carrito',carritoRoutes);
    this.app.use('/api/orden',ordenRoutes);
    this.app.use('/api/pagos',pagosRoutes);
    this.app.use('/api/tarjetas',tarjetasRoutes);

}
start (): void
{
this.app.listen(this.app.get('port'), () =>
{
console.log('El servidor se esta ejecutando en el puerto: ',this.app.get('port'));
});
}
}
const server = new Server();
server.start();
