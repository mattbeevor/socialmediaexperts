import { Component, Input } from '@angular/core';

@Component({
  selector: '[box]',
  template: `
    <svg:polygon [attr.points]="p"></svg:polygon>
  `,



})
export class Box {
  title = 'box';

  @Input()
  p;
}
