import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/user-list', title: 'User List',  icon:'content_paste', class: '' },
    { path: '/projet-list', title: 'Poject List',  icon:'content_paste', class: '' },
    { path: '/resource-list', title: 'Resource List',  icon:'content_paste', class: '' },
    { path: '/modal', title: 'modal',  icon:'content_paste', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
