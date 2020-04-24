import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PayoutDashboardComponent } from './payout-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: PayoutDashboardComponent,
    data: {
      title: 'Payout Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayoutDashboardRoutingModule {}
