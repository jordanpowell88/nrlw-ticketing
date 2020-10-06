import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITicket, ITicketFilter } from '../interfaces';

export class EditTicketForm extends FormGroup {
  get completed(): AbstractControl {
    return this.controls.completed as AbstractControl;
  }

  get assigneeId(): AbstractControl {
    return this.controls.assigneeId as AbstractControl;
  }

  constructor(readonly fb: FormBuilder, ticket: Partial<ITicket>) {
    super(fb.group({
      completed: [ticket?.completed ?? null, []],
      assigneeId: [ticket?.assigneeId ?? null, []]
    }).controls);
  }
}
