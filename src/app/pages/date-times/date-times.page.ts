import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-times',
  templateUrl: './date-times.page.html',
  styleUrls: ['./date-times.page.scss'],
})
export class DateTimesPage implements OnInit {

  formatOptions = {
    time: { hour: '2-digit', minute: '2-digit' },
    date: { day: '2-digit', month: 'long' },
  }

  constructor() { }

  ngOnInit() {
    console.log('hola')
  }


  eventoFecha(event: any) {
    console.log(event)
  }
}
