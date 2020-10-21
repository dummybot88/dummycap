import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs-comp',
  templateUrl: './tabs-comp.component.html',
  styleUrls: ['./tabs-comp.component.scss'],
})
export class TabsCompComponent implements OnInit {

  selectedTab = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedTab = this.populateSelectedTab(event);
      }
    });
    this.selectedTab = 'tab1';
  }

  ngOnInit() {}

  private populateSelectedTab(event: RouterEvent): string {
    let tabName:string = 'tab1';
    switch(event.url){
      case '/menu/tab1' : {
        tabName = 'tab1';
        break;
      }
      case '/menu/tab2' : {
        tabName = 'tab2';
        break;
      }
    }
    return tabName;
  }

  goTo(url: string, tabName: string) {
    this.router.navigateByUrl(url);
    this.selectedTab = tabName;
  }

}
