import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { PayoutDashboardComponent } from './payout-dashboard.component';
import { PayoutDashboardRoutingModule } from './payout-dashboard-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    PayoutDashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ PayoutDashboardComponent ]
})
export class PayoutDashboardModule { }
