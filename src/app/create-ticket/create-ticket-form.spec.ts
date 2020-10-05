import { FormBuilder } from '@angular/forms';
import { CreateTicketForm } from './create-ticket-form';

describe('CreateTicketForm', () => {
  const fb = new FormBuilder();

  it('should create an instance', () => {
    expect(new CreateTicketForm(fb)).toBeTruthy();
  });
});
