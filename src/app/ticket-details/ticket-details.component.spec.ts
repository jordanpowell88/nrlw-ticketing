import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsComponent } from './ticket-details.component';

import { IState } from 'src/app/store/state';
import { initialState as ticketInitialState, ITicketStoreState } from 'src/app/store/ticket-store/ticket-store';
import { initialState as userInitialState } from 'src/app/store/user-store/user-store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import { ITicket } from '../interfaces';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';

const initialState = {
  tickets: ticketInitialState,
  users: userInitialState
} as IState;

describe('TicketDetailsComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;
  let store: MockStore;
  let ticket: MemoizedSelector<ITicketStoreState, ITicket>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDetailsComponent ],
      providers: [provideMockStore({ initialState })],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    ticket = store.overrideSelector(ticketSelectors.selectCurrentTicket, { }as ITicket);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
