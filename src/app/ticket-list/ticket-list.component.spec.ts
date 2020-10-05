import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { IState } from 'src/app/store/state';
import { initialState as ticketInitialState, ITicketStoreState } from 'src/app/store/ticket-store/ticket-store';
import { initialState as userInitialState, IUserStore } from 'src/app/store/user-store/user-store';
import { TicketListComponent } from './ticket-list.component';
import { ITicket, IUser } from '../interfaces';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';
import * as userSelectors from 'src/app/store/user-store/user.selectors';

const initialState = {
  tickets: ticketInitialState,
  users: userInitialState
} as IState;

describe('TicketListComponent', () => {
  let component: TicketListComponent;
  let fixture: ComponentFixture<TicketListComponent>;
  let store: MockStore;
  let isLoading: MemoizedSelector<ITicketStoreState, boolean>;
  let tickets: MemoizedSelector<ITicketStoreState, ITicket[]>;
  let users: MemoizedSelector<IUserStore, IUser[]>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketListComponent ],
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [RouterTestingModule]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    isLoading = store.overrideSelector(ticketSelectors.selectIsLoading, false);
    tickets = store.overrideSelector(ticketSelectors.selectFilteredTickets, []);
    users = store.overrideSelector(userSelectors.selectUsers, []);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
