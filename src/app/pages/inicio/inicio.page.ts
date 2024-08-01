import { Component, OnInit } from '@angular/core';

interface listItem {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  items: listItem[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'calendar-outline',
      name: 'Dates',
      redirectTo: '/date-times'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Sistema Grid',
      redirectTo: '/grid-system'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll'
    },
    {
      icon: 'logo-ionic',
      name: 'Modal example',
      redirectTo: '/modal'
    },
    {
      icon: 'tablet-portrait-outline',
      name: 'Popover',
      redirectTo: '/popover'
    },
    {
      icon: 'sync-outline',
      name: 'Progress Bar and Range',
      redirectTo: '/progress-bar'
    },
    {
      icon: 'logo-facebook',
      name: 'Refresher',
      redirectTo: '/ion-refresher'
    },
    {
      icon: 'search-outline',
      name: 'Search',
      redirectTo: '/search'
    },
    {
      icon: 'wallet-outline',
      name: 'Segments',
      redirectTo: '/segment'
    },
    {
      icon: 'wallet-outline',
      name: 'Swiper Slide',
      redirectTo: '/slide-swiper'
    },
    {
      icon: 'cafe-outline',
      name: 'Toast',
      redirectTo: '/toast'
    }
  ];
  constructor() { }

  ngOnInit() {
    console.log('init')
  }

}
