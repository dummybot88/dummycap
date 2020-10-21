import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu1PageRoutingModule } from './menu1-routing.module';

import { Menu1Page } from './menu1.page';
import { TabsCompComponent } from '../tabs-comp/tabs-comp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu1PageRoutingModule
  ],
  declarations: [Menu1Page, TabsCompComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Menu1PageModule {}
