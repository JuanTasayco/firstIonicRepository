import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  progress = 0;
  constructor() {
    setInterval(() => {
      this.progress += 0.01;

      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0
        }, 1000)
      }
    }, 50)
  }

  ngOnInit() {
    console.log('hola');
  }


  /* range */
  pinFormatter(value: number) {
    return `${value}%`
  }
  eventRange(event: any) {
    console.log(event.detail.value)
  }
}
