import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';

export class FiltersForm extends FormGroup {
  get completed(): AbstractControl {
    return this.controls.completed as AbstractControl;
  }

  get assigneeId(): AbstractControl {
    return this.controls.assigneeId as AbstractControl;
  }

  constructor(readonly fb: FormBuilder) {
    super(fb.group({
      completed: [],
      assigneeId: []
    }).controls);
  }
}
