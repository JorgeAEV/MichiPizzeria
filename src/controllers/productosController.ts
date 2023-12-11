import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class ProductosController
    {
    public async mostrar_todos_productos(req: Request, res: Response ): Promise<void>{
        console.log("YA ESTAMOS AQUI");
        const respuesta = await pool.query('SELECT * FROM productos');
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM productos WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Rol no encontrado'});
    }
    //aqui va el crud
    public async createProducto(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO productos set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarProducto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE productos set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarProducto(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM productos WHERE id = ${id}`);
        res.json(resp);
    }
}

export const productosController = new ProductosController();