import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nrwl-ticketing';
  errors$ = this.store.select(ticketSelectors.selectError);

  constructor(private store: Store) { }
}
