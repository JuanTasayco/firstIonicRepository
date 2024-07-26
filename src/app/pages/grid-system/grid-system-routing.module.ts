import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridSystemPage } from './grid-system.page';

const routes: Routes = [
  {
    path: '',
    component: GridSystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridSystemPageRoutingModule {}
