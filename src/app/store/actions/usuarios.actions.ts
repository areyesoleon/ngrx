import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[USUARIO] cargar usuario';
export const CARGAR_USUARIOS_FAID = '[USUARIO] cargar usuario fail';
export const CARGAR_USUARIOS_SUCCESS = '[USUARIO] cargar usuario success';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuarioFail  implements Action {
    readonly type = CARGAR_USUARIOS_FAID;
    constructor(public payload: any) { }
}

export class CargarUsuarioSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor(public usuarios: Usuario[]) {}
}

export type usuariosAcciones = CargarUsuarios | CargarUsuarioFail | CargarUsuarioSuccess;