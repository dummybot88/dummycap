import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu2PageRoutingModule } from './menu2-routing.module';

import { Menu2Page } from './menu2.page';
import { TabsCompComponent } from '../tabs-comp/tabs-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu2PageRoutingModule
  ],
  declarations: [Menu2Page, TabsCompComponent]
})
export class Menu2PageModule {}
