import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './core/auth/authguard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { DamlAngularModule } from '@darkedges/daml-angular';
import { environment } from 'src/environments/environment';
import { FRAMAuthUIModule } from '@darkedges/framauthui';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DamlAngularModule,
    RouterModule,
    // FRAM Auth UI
    FRAMAuthUIModule.forRoot({
      fram: {
        baseURL: environment.FRAMURL + '/openam',
        realm: environment.FRAMREALM
      },
      oauth2: {
        clientId: environment.OAUTH2CLIENTID,
        redirectURI: environment.OAUTH2REDIRECTURI,
        issuer: environment.OAUTH2ISSUER
      }
    }),
    CoreModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
