import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TicketStoreEffects } from './ticket.effects';
import { reducer, ticketFeatureKey } from './ticket.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ticketFeatureKey, reducer),
    EffectsModule.forFeature([TicketStoreEffects])
  ]
})
export class TicketStoreModule { }
