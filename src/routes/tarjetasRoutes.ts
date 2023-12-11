import { Router } from 'express';
import { tarjetasController } from '../controllers/tarjetasController';
import { validarToken } from '../middleware/auth'

class TarjetasRoutes
{
    public router: Router=Router();
    constructor()
    {
        this.config();
    }
    config() : void
    {
        this.router.get('/mostrarTodasTarjetas/',tarjetasController.mostrar_todas_tarjetas);
        this.router.get('/mostrarTarjeta/:id',tarjetasController.listOne);
        this.router.put('/actualizarTarjeta/:id',tarjetasController.actualizarTarjeta);
        this.router.delete('/eliminarTarjeta/:id',tarjetasController.eliminarTarjeta);
        this.router.post('/crearTarjeta/',tarjetasController.createTarjeta);

        this.router.get('/mostrarTodasTarjetasToken/',validarToken,tarjetasController.mostrar_todas_tarjetas);
        this.router.get('/mostrarTarjetaToken/:id',validarToken,tarjetasController.listOne);
        this.router.put('/actualizarTarjetaToken/:id',validarToken,tarjetasController.actualizarTarjeta);
        this.router.delete('/eliminarTarjetaToken/:id',validarToken,tarjetasController.eliminarTarjeta);
        this.router.post('/crearTarjetaToken/',validarToken,tarjetasController.createTarjeta);
        
    }
}
const tarjetasRoutes= new TarjetasRoutes();
export default tarjetasRoutes.router;