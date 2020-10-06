import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateTicketComponent } from './create-ticket.component';

import { IState } from 'src/app/store/state';
import { initialState as ticketInitialState } from 'src/app/store/ticket-store/ticket-store';
import { initialState as userInitialState } from 'src/app/store/user-store/user-store';
import { provideMockStore } from '@ngrx/store/testing';
import { RouterTestingModule } from '@angular/router/testing';

const initialState = {
  tickets: ticketInitialState,
  users: userInitialState
} as IState;

describe('CreateTicketComponent', () => {
  let component: CreateTicketComponent;
  let fixture: ComponentFixture<CreateTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTicketComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [provideMockStore({ initialState })]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
