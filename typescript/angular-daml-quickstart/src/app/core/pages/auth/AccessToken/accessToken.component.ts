import { Component } from '@angular/core';
import { OAuthService } from '@darkedges/framauthui';

@Component({
    selector: 'app-access-token-root',
    templateUrl: './accessToken.component.html',
    styleUrls: ['./accessToken.component.scss']
})
export class AccessTokenComponent {
    constructor(
        private oauthService: OAuthService
    ) {
        this.oauthService.tryLogin();
    }
}
