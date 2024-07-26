import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridSystemPageRoutingModule } from './grid-system-routing.module';

import { GridSystemPage } from './grid-system.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridSystemPageRoutingModule
  ],
  declarations: [GridSystemPage]
})
export class GridSystemPageModule {}
