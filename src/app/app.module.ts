import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootStoreModule } from './store/root-store.module';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketFiltersComponent } from './ticket-list/ticket-filters/ticket-filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { ErrorsComponent } from './errors/errors.component';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { UserNamePipe } from './pipes/user-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketDetailsComponent,
    TicketFiltersComponent,
    LoaderComponent,
    ErrorsComponent,
    CreateTicketComponent,
    UserNamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RootStoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
