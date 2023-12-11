import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class OrdenController
{
    public async mostrar_todos_ordenes(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM orden');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM orden WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Orden de compra no encontrado'});
    }

    //aqui va el crud
    public async createOrden(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO orden set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarOrden(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE orden set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarOrden(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM orden WHERE id = ${id}`);
        res.json(resp);
    }   
}

export const ordenController = new OrdenController();