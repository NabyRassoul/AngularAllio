import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/home/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/home/bons",
    title: "Bons de Reduction",
    icon: "icon-badge",
    class: ""
  },
  {
    path: "/home/prospectus",
    title: "Prospectus",
    icon: "icon-bag-16",
    class: ""
  },
  {
    path: "/home/campagnes",
    title: "Campagnes",
    icon: "icon-money-coins",
    class: ""
  },
  {
    path: "/home/fidelite",
    title: "Programme Fidelite",
    icon: "icon-bell-55",
    class: ""
  },
  // {
  //   path: "/home/icons",
  //   title: "Icons",
  //   icon: "icon-atom",
  //   class: ""
  // },
  {
    path: "/home/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
