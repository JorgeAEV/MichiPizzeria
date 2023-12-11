import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class SuscripcionesController
    {
    public async mostrar_todos_suscripciones(req: Request, res: Response ): Promise<void>{
        console.log("YA ESTAMOS AQUI");
        const respuesta = await pool.query('SELECT * FROM suscripciones');
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM suscripciones WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Suscripción no encontrada'});
    }
    //aqui va el crud
    public async createSuscripcion(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO suscripciones set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarSuscripcion(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE suscripciones set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarSuscripcion(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM resesuscripcionesñas WHERE id = ${id}`);
        res.json(resp);
    }
}

export const suscripcionesController = new SuscripcionesController();