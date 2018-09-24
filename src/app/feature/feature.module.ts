import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: []
})
export class FeatureModule { }
