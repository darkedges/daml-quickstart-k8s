import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from '@darkedges/framauthui';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashBoardComponent {
    constructor(
        private router: Router,
        private oauthService: OAuthService
    ) {
    }
}
