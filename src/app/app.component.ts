import { Component, VERSION } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form: FormGroup = this.fb.group({
    name: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  constructor(private fb: FormBuilder) {
    this.form.get('name').valueChanges.subscribe((value) => {
      if (value) {
        this.form.get('name').setValue(value, { emitEvent: false });
      }
    });
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
