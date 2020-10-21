import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedPath = '';

  pages = [
    {
      title: 'Menu1',
      url: '/menu/menu1',
      src: 'chevron-forward-circle-outline'
    },
    {
      title: 'Menu2',
      url: '/menu/menu2',
      src: 'chevron-forward-circle-outline'
    }
  ]

}
