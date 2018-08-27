import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    usuarios: reducers.UsuariosState;
}

export const appReducer: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer
};
