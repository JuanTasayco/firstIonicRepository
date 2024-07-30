import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-refresher',
  templateUrl: './ion-refresher.page.html',
  styleUrls: ['./ion-refresher.page.scss'],
})
export class IonRefresherPage implements OnInit {
  items = Array(5);
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const nuevo = "";
      this.items.push(nuevo);
    }, 1000)
  }

  doRefresh(event: any) {
    console.log(event)
    /* cada vez que actulizo podría llamar la api para que traiga las ultimas actualizaciones */
    setTimeout(() => {
      this.items = this.items.slice(0, 5);
      event.target.complete();
    }, 2000)
  }

}
