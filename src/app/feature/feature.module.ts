import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {SharedModule} from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule,
    FeatureRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class FeatureModule { }
