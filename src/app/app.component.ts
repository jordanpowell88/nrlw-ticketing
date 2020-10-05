import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as selectors from 'src/app/store/store.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nrwl-ticketing';
  errors$ = this.store.select(selectors.selectErrors);

  constructor(private readonly store: Store) { }
}
