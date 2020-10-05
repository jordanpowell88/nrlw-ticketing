import { FormBuilder } from '@angular/forms';
import { ITicket } from '../interfaces';
import { EditTicketForm } from './edit-ticket-form';

describe('EditTicketForm', () => {
  const fb = new FormBuilder();
  it('should create an instance', () => {
    expect(new EditTicketForm(fb, { } as ITicket)).toBeTruthy();
  });
});
