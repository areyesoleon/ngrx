import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class  UsuariosEffects {
    constructor(
        private actions$: Actions,
        private _us: UsuarioService
    ) {}

    @Effect()
    cargarUsuarios$ = this.actions$.ofType(usuariosActions.CARGAR_USUARIOS)
    .pipe(
        switchMap(() => {
            return this._us.getUsers()
            .pipe(
                map((users) => new usuariosActions.CargarUsuarioSuccess(users)),
                catchError(error => of(new usuariosActions.CargarUsuarioFail(error)))
            );
        })
    );
}