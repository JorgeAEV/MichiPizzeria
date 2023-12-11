import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class TarjetasController
{
    public async mostrar_todas_tarjetas(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM tarjetas_credito');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM tarjetas_credito WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Tarjeta de crédito no encontrado'});
    }

    //aqui va el crud
    public async createTarjeta(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO tarjetas_credito set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarTarjeta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE tarjetas_credito set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarTarjeta(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM tarjetas_credito WHERE id = ${id}`);
        res.json(resp);
    }   
}

export const tarjetasController = new TarjetasController();