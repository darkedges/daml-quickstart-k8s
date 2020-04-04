import { Clipboard } from '@angular/cdk/clipboard';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { debounceTime } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JWTHelperService } from '../../services/jwthelper.service';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-tokendesign-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.scss'],
  providers: [DatePipe]
})
export class TokenDesignerComponent implements OnInit {
  tokenFormGroup: FormGroup;
  datetimeFormGroup: FormGroup;
  applicationId = null;
  participantId = null;
  ledgerId = 'aaaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
  actAs = ['Alice', 'Bob', 'USD_Bank', 'EUR_Bank'];
  readAs = [];
  admin = true;
  exp;
  datetime;
  public minDate: Date;
  JWT: string;

  // Chip
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor(
    private formBuilder: FormBuilder,
    private jwtHelper: JWTHelperService,
    private snackbar: MatSnackBar,
    private clipboard: Clipboard
  ) {
    const now = new Date();
    this.minDate = now;
    this.minDate.setDate(now.getDate() - 1);
    this.datetime = now;
    this.datetime.setDate(now.getDate() + 2);
    this.exp = Math.floor(new Date(this.datetime).getTime() / 1000);
  }

  ngOnInit(): void {
    this.tokenFormGroup = this.formBuilder.group({
      'https://daml.com/ledger-api': this.formBuilder.group(
        {
          ledgerId: [this.ledgerId, Validators.required],
          participantId: [this.participantId],
          applicationId: [this.applicationId],
          admin: [this.admin],
          actAs: [this.actAs],
          readAs: [this.readAs]
        }),
      exp: [this.exp, Validators.required]
    }
    );
    this.datetimeFormGroup = this.formBuilder.group({
      datetime: [this.datetime, Validators.required]
    });
    this.onChanges();
  }

  onChanges(): void {
    this.datetimeFormGroup.get('datetime').valueChanges.subscribe(val => {
      this.tokenFormGroup.get('exp').setValue(Math.floor(new Date(val).getTime() / 1000));
    });
    this.tokenFormGroup.get(['https://daml.com/ledger-api', 'participantId']).valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      if (val === '') {
        this.tokenFormGroup.get(['https://daml.com/ledger-api', 'participantId']).setValue(null);
      }
    });
    this.tokenFormGroup.get(['https://daml.com/ledger-api', 'applicationId']).valueChanges.pipe(
      debounceTime(300),
    ).subscribe(val => {
      if (val === '') {
        this.tokenFormGroup.get(['https://daml.com/ledger-api', 'applicationId']).setValue(null);
      }
    });
  }

  hasError(formGroupName: string, controlName: string, errorName: string) {
    let c;
    if (formGroupName) {
      c = this.tokenFormGroup.controls[formGroupName];
    } else {
      c = this.tokenFormGroup;
    }
    if (c.controls[controlName].touched) {
      return c.controls[controlName].hasError(errorName);
    }
  }

  hasDateTimeError(formGroupName: string, controlName: string, errorName: string) {
    let c;
    if (formGroupName) {
      c = this.datetimeFormGroup.controls[formGroupName];
    } else {
      c = this.datetimeFormGroup;
    }
    if (c.controls[controlName].touched) {
      return c.controls[controlName].hasError(errorName);
    }
  }

  add(formGroupName: string, controlName: string, event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    const controller = this.tokenFormGroup.get([formGroupName, controlName]);
    if ((value.trim() !== '')) {
      if ((value || '').trim()) {
        controller.setErrors(null);   // 1
        const tempEmails = controller.value; // 2
        tempEmails.push(value.trim());
        controller.setValue(tempEmails);     // 3
        if (controller.valid) {              // 4
          controller.markAsDirty();
          input.value = '';                                    // 5
        } else {
          const index = controller.value.findIndex(value1 => value1 === value.trim());
          if (index !== -1) {
            controller.value.splice(index, 1);           // 6
          }
        }
      }
      if (input) {
        input.value = '';
      }
    } else {
      controller.updateValueAndValidity();
    }
  }

  remove(formGroupName: string, controlName: string, fruit: string): void {
    const controller = this.tokenFormGroup.get([formGroupName, controlName]);
    const index = controller.value.indexOf(fruit);
    if (index >= 0) {
      controller.value.splice(index, 1);
      controller.markAsDirty();
    }
    controller.updateValueAndValidity();
  }

  create() {
    this.JWT = this.jwtHelper.create(JSON.stringify(this.tokenFormGroup.value));
  }

  downloadJWT() {
    const blob = new Blob([this.JWT], { type: 'text/plain;charset=utf-8' });
    saveAs(blob, `damlAccessToken`);
  }

  copyJWT() {
    if (this.clipboard.copy(this.JWT)) {
      this.snackbar.open('JWT copied', '', { duration: 2500 });
    } else {
      this.snackbar.open('Copy failed. Please try again!', '', { duration: 2500 });
    }
  }
}
