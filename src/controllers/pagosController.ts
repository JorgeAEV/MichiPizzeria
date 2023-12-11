import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class PagosController
{
    public async mostrar_todos_pagos(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM pagos');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM pagos WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Información del pago no encontrado'});
    }

    //aqui va el crud
    public async createPago(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO pagos set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarPago(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE pagos set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarPago(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM pagos WHERE id = ${id}`);
        res.json(resp);
    }   
}

export const pagosController = new PagosController();