import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full'
  },
  {
    path: 'tickets',
    component: TicketListComponent
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent
  },
  {
    path: 'create',
    component: CreateTicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
