import { Component, OnInit, ViewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
    console.log('onInit')
  }

  @ViewChild('refScroll') refScroll !: IonInfiniteScroll;

  loadData(event: InfiniteScrollCustomEvent) {
    setTimeout(() => {
      if (this.data.length > 50) {
        console.log('entrando')
        this.refScroll.complete()
        this.refScroll.disabled = true;
      }

      const newArr = Array(20);
      this.data.push(...newArr);
      event.target.complete()
    }, 2000)
  }

}
