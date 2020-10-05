import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

export class CreateTicketForm extends FormGroup {
  get description(): AbstractControl {
    return this.controls.description as AbstractControl;
  }

  constructor(readonly fb: FormBuilder) {
    super(fb.group({
      description: ['', [Validators.required]]
    }).controls);
  }
}
