import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = this.fb.group({
    name: '',
    title: '',
    
  });

  constructor(private fb: FormBuilder) {
    this.form.get('name').valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('name').setValue(value, { emitEvent: false });
      }
    });
  }

  onSubmit() {
    console.log(this.form.get('name').value);
  }
}
