import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ITicket } from '../interfaces';
import * as selectors from 'src/app/store/ticket-store/ticket.selectors';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent {
  ticket$ = this.store.select(selectors.selectCurrentTicket);

  constructor(
    private readonly store: Store,
    private router: Router
  ) {}

  goBack(): void {
    this.router.navigate(['/tickets']);
  }

}
