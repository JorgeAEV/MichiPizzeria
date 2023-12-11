import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class ValoracionesController
    {
    public async mostrar_todos_Valoraciones(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM valoraciones');
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM valoraciones WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Valoración no encontrada'});
    }
    //aqui va el crud
    public async createValoracion(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO valoraciones set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarValoracion(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE valoraciones set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarValoracion(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM valoraciones WHERE id = ${id}`);
        res.json(resp);
    }
}

export const valoracionesController = new ValoracionesController();