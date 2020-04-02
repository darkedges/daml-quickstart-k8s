import { ActionAuthLogin, AuthActionTypes } from '@darkedges/framauthui';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService, OAuthService } from '@darkedges/framauthui';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService,
    private oauthService: OAuthService
  ) { }

  login$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGIN),
    tap((action: ActionAuthLogin) => this.oauthService.initImplicitFlowInternal(action.authenticated))
  ), { dispatch: false });

  accessToken$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.ACCESS_TOKEN),
    tap(() => this.router.navigate(['']))
  ), { dispatch: false });

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap(() => {
      // this.authService.logout();
      this.router.navigate(['']);
    })
  ), { dispatch: false });
}
