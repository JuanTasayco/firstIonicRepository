import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then(m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
  },
  {
    path: 'date-times',
    loadChildren: () => import('./pages/date-times/date-times.module').then(m => m.DateTimesPageModule)
  },
  {
    path: 'fab',
    loadChildren: () => import('./pages/fab/fab.module').then(m => m.FabPageModule)
  },
  {
    path: 'grid-system',
    loadChildren: () => import('./pages/grid-system/grid-system.module').then(m => m.GridSystemPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/modal/modal.module').then(m => m.ModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./pages/popover/popover.module').then(m => m.PopoverPageModule)
  },
  {
    path: 'progress-bar',
    loadChildren: () => import('./pages/progress-bar/progress-bar.module').then(m => m.ProgressBarPageModule)
  },
  {
    path: 'ion-refresher',
    loadChildren: () => import('./pages/ion-refresher/ion-refresher.module').then(m => m.IonRefresherPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'segment',
    loadChildren: () => import('./pages/segment/segment.module').then(m => m.SegmentPageModule)
  },
  {
    path: 'slide-swiper',
    loadChildren: () => import('./pages/slide-swiper/slide-swiper.module').then(m => m.SlideSwiperPageModule)
  },
  {
    path: 'split-pane',
    loadChildren: () => import('./pages/split-pane/split-pane.module').then(m => m.SplitPanePageModule)
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
