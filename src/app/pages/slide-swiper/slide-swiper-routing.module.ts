import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideSwiperPage } from './slide-swiper.page';

const routes: Routes = [
  {
    path: '',
    component: SlideSwiperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideSwiperPageRoutingModule {}
