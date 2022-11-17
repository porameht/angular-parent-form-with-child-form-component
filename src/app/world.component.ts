import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'hello',
  template: `
    <input type="text" [formControl]="name">
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: any;

  constructor(private fg: FormGroupDirective) {
    this.fg.ngSubmit.subscribe(() => {
      console.log('listen submit in child');
    });
  }
}
