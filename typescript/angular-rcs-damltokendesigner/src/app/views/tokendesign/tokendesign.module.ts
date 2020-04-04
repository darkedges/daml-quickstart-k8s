import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { NgModule } from '@angular/core';
import { TokenDesignerComponent } from './components/designer/designer.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import {
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { LOCALE_ID, Inject } from '@angular/core';
import { TokenDesignRoutingModule } from './tokendesign.router';
import { JwtHighlightComponent } from './components/jwthighlight/jwt-highlight.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [
        TokenDesignerComponent,
        JwtHighlightComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatSliderModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatDatepickerModule,
        MatMomentDateModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatMomentModule,
        TokenDesignRoutingModule,
        MatToolbarModule,
        ClipboardModule,
        MatSnackBarModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        MatSliderModule,
        MatCheckboxModule,
        MatButtonModule,
        MatInputModule,
        MatCardModule,
        MatChipsModule,
        MatIconModule,
        MatDatepickerModule,
        MatMomentDateModule,
        NgxMatDatetimePickerModule,
        NgxMatTimepickerModule,
        NgxMatNativeDateModule,
        MatToolbarModule,
        ClipboardModule,
        MatSnackBarModule
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: LOCALE_ID },
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    ]
})
export class TokenDesignModule {
    constructor(
        @Inject(LOCALE_ID) public locale: string
    ) {
        console.log(locale);
    }
}
