import { Component, OnInit } from '@angular/core';
import { DataService, SuperHeroe } from 'src/app/services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superheroes: SuperHeroe[] = [];
  constructor(private dataService: DataService) { }
  results: SuperHeroe[] = [];
  ngOnInit() {
    console.log(this.superheroes)
    this.dataService.getSuperheroes().subscribe((response) => {
      this.superheroes = response;
      this.results = response;
    })
  }

  filterHero(event: any) {
    switch (event.detail.value) {
      case 'dc':
        this.results = this.superheroes.filter(r => r.publisher === 'DC Comics')
        break;
      case 'marvel':
        this.results = this.superheroes.filter(r => r.publisher === 'Marvel Comics')
        break;
      default:
        this.results = this.superheroes;

    }
  }

}
