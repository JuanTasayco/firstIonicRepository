import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  data = Array(100);
  constructor() { }

  ngOnInit() {
    console.log(this.data.length)
  }

  pressIcon(nameButton: string) {
    switch (nameButton) {
      case 'angular':
        console.log('soy angular')
        break;
      case 'ionic':
        console.log('soy ionic')
        break;
      default:
        console.log('no soy ninguno amigo')
    }
  }

}
