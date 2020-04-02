import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    StoreModule
} from '@ngrx/store';
import { AuthEffects } from './auth/auth.effects';
import { authReducer } from '@darkedges/framauthui';
import { CommonModule } from '@angular/common';
import { debug } from './meta-reducers/debug.reducer';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService } from 'angular-web-storage';
import { localStorageSync } from 'ngrx-store-localstorage';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { storeFreeze } from 'ngrx-store-freeze';
import { DashBoardComponent } from './pages/dashboard/dashboard.component';
import { AccessTokenComponent } from './pages/auth/AccessToken/accessToken.component';
import { RouterModule } from '@angular/router';

export interface AppState {
    auth: any;
}

const reducers: ActionReducerMap<AppState> = {
    auth: authReducer,
};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['auth'],
        rehydrate: true
    })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

if (!environment.production) {
    metaReducers.unshift(storeFreeze);
    if (!environment.test) {
        metaReducers.unshift(debug);
    }
}

@NgModule({
    imports: [
        // angular
        CommonModule,
        HttpClientModule,
        RouterModule,

        // ngrx
        StoreModule.forRoot(
            reducers,
            { metaReducers }
        ),
        EffectsModule.forRoot([AuthEffects]),
    ],
    declarations: [
        DashBoardComponent,
        AccessTokenComponent
    ],
    providers: [LocalStorageService]
})
export class CoreModule {
    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule
    ) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
}
