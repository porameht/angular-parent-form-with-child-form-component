import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'world',
  template: `
    <input type="text" [formControl]="form.get('price')">
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class WorldComponent {
  @Input() form: any;

  constructor(private fg: FormGroupDirective) {
    this.fg.ngSubmit.subscribe(() => {
      console.log('listen submit in child');
    });
  }
}
