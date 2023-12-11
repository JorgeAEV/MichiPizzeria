import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class SesioncompraController
{
    public async mostrar_todas_sesiones(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM sesion_compra');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM sesion_compra WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Sesion no encontrado'});
    }

    //aqui va el crud
    public async createSesion(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO sesion_compra set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarSesion(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE sesion_compra set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarSesion(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM sesion_compra WHERE id = ${id}`);
        res.json(resp);
    }   
}

export const sesioncompraController = new SesioncompraController();