import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class CarritoController
{
    public async mostrar_todos_carritos(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM carrito_compra');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM carrito_compra WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Carrito de compra no encontrado'});
    }

    //aqui va el crud
    public async createCarrito(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO carrito_compra set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarCarrito(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE carrito_compra set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarCarrito(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM carrito_compra WHERE id = ${id}`);
        res.json(resp);
    }   
}

export const carritoController = new CarritoController();