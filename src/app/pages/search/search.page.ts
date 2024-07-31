import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor() { }
  public data = [
    'Amsterdam',
    'Buenos Aires',
    'Cairo',
    'Geneva',
    'Hong Kong',
    'Istanbul',
    'London',
    'Madrid',
    'New York',
    'Panama City',
  ];
  ngOnInit() {
    console.log('search');
  }

  results = [...this.data]

  handleInput(event: any) {

    const query = (event.detail.value as string).toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }



}
