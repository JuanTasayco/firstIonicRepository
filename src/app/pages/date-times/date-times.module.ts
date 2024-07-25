import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimesPageRoutingModule } from './date-times-routing.module';

import { DateTimesPage } from './date-times.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimesPageRoutingModule
  ],
  declarations: [DateTimesPage]
})
export class DateTimesPageModule {}
