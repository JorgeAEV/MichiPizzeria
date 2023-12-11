import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class ItemcarritoController
{
    public async mostrar_todos_items(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM item_carrito');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM item_carrito WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Item del carrito no encontrado'});
    }

    //aqui va el crud
    public async createItem(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO item_carrito set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarItem(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE item_carrito set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarItem(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM item_carrito WHERE id = ${id}`);
        res.json(resp);
    }   
}

export const itemcarritoController = new ItemcarritoController();