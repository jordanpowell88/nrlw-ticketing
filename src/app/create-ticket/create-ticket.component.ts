import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CreateTicketForm } from './create-ticket-form';
import * as actions from 'src/app/store/ticket-store/ticket.actions';
import { ITicket } from '../interfaces';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent {
  form: CreateTicketForm;

  constructor(
    readonly fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.form = new CreateTicketForm(fb);
  }

  create(): void {
    this.store.dispatch(actions.addTicket({ description: this.form.description.value }));
    this.cancel();
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
