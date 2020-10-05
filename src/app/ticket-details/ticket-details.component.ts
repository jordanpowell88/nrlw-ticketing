import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITicket } from '../interfaces';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';
import * as userSelectors from 'src/app/store/user-store/user.selectors';
import { take, tap } from 'rxjs/operators';
import { EditTicketForm } from './edit-ticket-form';
import { FormBuilder } from '@angular/forms';
import * as actions from 'src/app/store/ticket-store/ticket.actions';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  ticket$: Observable<ITicket>;
  users$ = this.store.select(userSelectors.selectUsers);
  form: EditTicketForm;

  constructor(
    private store: Store,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private readonly fb: FormBuilder
  ) {
    this.ticket$ = this.store.pipe(
      take(1),
      select(
        ticketSelectors.selectCurrentTicket,
        Number(this.activatedRouter.snapshot.params.id)
      ),
      tap(ticket => this.form = new EditTicketForm(fb, ticket))
    );
  }

  goBack(): void {
    this.router.navigate(['/tickets']);
  }

  save(ticketId: number): void {
    if (this.form.completed.dirty) {
      this.completeTicket(ticketId);
    }

    if (this.form.assigneeId.dirty) {
      this.assignTicket(ticketId);
    }

    this.goBack();
  }

  assignTicket(ticketId): void {
    this.store.dispatch(actions.assignTicket({ ticketId, userId: Number(this.form.assigneeId.value) }));
  }

  completeTicket(ticketId: number): void {
    this.store.dispatch(actions.completeTicket({ ticketId }));
  }

}
