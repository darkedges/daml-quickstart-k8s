import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-jwthighlight',
  template: '<span class="jwt" *ngIf="viewable"><span class="jwt-header">{{ values[0] }}</span>' +
    '<span class="jwt-dot">.</span><span class="jwt-payload">{{ values[1] }}</span>' +
    '<span class="jwt-dot">.</span><span class="jwt-signature">{{ values[2] }}</span></span>',
  styles: [
    '.jwt { font-family: monospace; white-space: pre-wrap; overflow-wrap: anywhere; word-break: break-all}',
    '.jwt .jwt-header {color: #fb015b}',
    '.jwt .jwt-payload {color: #d63aff}',
    '.jwt .jwt-signature {color: #00b9f1}',
  ]
})
export class JwtHighlightComponent implements OnInit, OnChanges {

  @Input() jwt: string;
  values: string[];
  viewable = false;

  ngOnInit(): void {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.jwt = changes.jwt.currentValue;
    this.refresh();
  }

  refresh() {
    if (this.jwt !== undefined) {
      this.viewable = true;
      this.values = this.jwt.split('.');
    }
  }

}
