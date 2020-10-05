import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer, userFeatureKey } from './user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserStoreEffects } from './user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(userFeatureKey, reducer),
    EffectsModule.forFeature([UserStoreEffects])
  ]
})
export class UserStoreModule { }
