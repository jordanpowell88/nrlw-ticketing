import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDetailsComponent } from './ticket-details.component';

import { IState } from 'src/app/store/state';
import { initialState as ticketInitialState, ITicketStoreState } from 'src/app/store/ticket-store/ticket-store';
import { initialState as userInitialState, IUserStore } from 'src/app/store/user-store/user-store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MemoizedSelector, MemoizedSelectorWithProps } from '@ngrx/store';
import { ITicket, IUser } from '../interfaces';
import * as ticketSelectors from 'src/app/store/ticket-store/ticket.selectors';
import * as userSelectors from 'src/app/store/user-store/user.selectors';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserNamePipe } from '../pipes/user-name.pipe';
import { EditTicketForm } from './edit-ticket-form';

const initialState = {
  tickets: ticketInitialState,
  users: userInitialState
} as IState;

describe('TicketDetailsComponent', () => {
  let component: TicketDetailsComponent;
  let fixture: ComponentFixture<TicketDetailsComponent>;
  let store: MockStore;
  let ticket: MemoizedSelectorWithProps<ITicketStoreState, number, ITicket>;
  let users: MemoizedSelector<IUserStore, IUser[]>;
  const fb = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDetailsComponent, UserNamePipe ],
      providers: [provideMockStore({ initialState })],
      imports: [RouterTestingModule, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    ticket = store.overrideSelector(ticketSelectors.selectCurrentTicket, { } as ITicket);
    users = store.overrideSelector(userSelectors.selectUsers, []);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDetailsComponent);
    component = fixture.componentInstance;
    component.form = new EditTicketForm(fb, { } as ITicket);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
