import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateTimesPage } from './date-times.page';

const routes: Routes = [
  {
    path: '',
    component: DateTimesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimesPageRoutingModule {}
