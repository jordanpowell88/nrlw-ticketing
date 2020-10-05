import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { TicketStoreModule } from './ticket-store/ticket-store.module';
import { UserStoreModule } from './user-store/user-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TicketStoreModule,
    UserStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ]
})
export class RootStoreModule { }
