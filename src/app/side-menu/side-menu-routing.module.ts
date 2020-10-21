import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideMenuPage } from './side-menu.page';

const routes: Routes = [
  {
    path: '',
    component: SideMenuPage,
    children:[
      {
        path: 'menu1',
        loadChildren: () => import('.././menu1/menu1.module').then( m => m.Menu1PageModule)
      },
      {
        path: 'menu2',
        loadChildren: () => import('.././menu2/menu2.module').then( m => m.Menu2PageModule)
      },
      {
        path: 'tab1',
        loadChildren: () => import('.././tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('.././tab2/tab2.module').then( m => m.Tab2PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SideMenuPageRoutingModule {}
