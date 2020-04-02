import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService, OAuthService, Authenticated } from '@darkedges/framauthui';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(
        private oauthService: OAuthService,
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (!this.authService.isLoggedIn) {
            const b: Authenticated = new Authenticated({
                realm: '',
                successUrl: '',
                tokenId: Math.random().toString(36).substring(16)
            });
            this.oauthService.initImplicitFlowInternal(b);
            return false;
        }
        return true;
    }
}
