import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class ResenasController
    {
    public async mostrar_todos_resenas(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM reseñas');
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM reseñas WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Reseña no encontrada'});
    }
    //aqui va el crud
    public async createResena(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO reseñas set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarResena(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE reseñas set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarResena(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM reseñas WHERE id = ${id}`);
        res.json(resp);
    }
}

export const resenasController = new ResenasController();