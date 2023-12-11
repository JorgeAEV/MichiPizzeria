import {Request,Response} from 'express';
import pool from '../database'; //acceso a la base de datos
class UsuariosController
{
    public async mostrar_todos_usuarios(req: Request, res: Response ): Promise<void>{
        const respuesta = await pool.query('SELECT * FROM usuarios');
        res.json( respuesta );
    }
    
    public async listOne(req: Request, res: Response): Promise <void>{
        const {id} = req.params;
        const respuesta = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        if(respuesta.length>0){
            res.json(respuesta[0]);
            return ;
        }
        res.status(404).json({'mensaje': 'Usuario no encontrado'});
    }

    //aqui va el crud
    public async createUsuario(req: Request, res: Response): Promise<void> {
        const resp = await pool.query("INSERT INTO usuarios set ?",[req.body]);
        res.json(resp);
    }

    public async actualizarUsuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(id);
        const resp = await pool.query("UPDATE usuarios set ? WHERE id = ?", [req.body, id]);
        res.json(resp);
    }

    public async eliminarUsuario(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM usuarios WHERE id = ${id}`);
        res.json(resp);
    }

    public async listarUsuariosRol(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`SELECT usuarios.nombre, roles.nombre as rol FROM usuarios LEFT JOIN roles on usuarios.id_rol = roles.id WHERE usuarios.id_Rol = ${id};`);
        res.json(resp);
    }

    public async ValidarUsuario(req: Request, res: Response): Promise<void> {
        const parametros = req.body;
        var consulta = `SELECT id_Rol, correo FROM usuarios WHERE correo = '${parametros.correo}' AND contraseña = '${parametros.contraseña}'`;
        const resp = await pool.query(consulta);
        if(resp.length>0)
            res.json(resp);
        else
            res.json({"id_Rol":"-1"});
    }    
}

export const usuariosController = new UsuariosController();