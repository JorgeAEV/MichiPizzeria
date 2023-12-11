import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class PlanesController
    {
    public async mostrar_todos_planes(req: Request, res: Response ): Promise<void>{
        console.log("YA ESTAMOS AQUI");
        const respuesta = await pool.query('SELECT * FROM planes');
        res.json( respuesta );
    }
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM planes WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Rol no encontrado'});
    }
    //aqui va el crud
    public async createPlan(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO planes set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarPlan(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE planes set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarPlan(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM planes WHERE id = ${id}`);
        res.json(resp);
    }
}

export const planesController = new PlanesController();