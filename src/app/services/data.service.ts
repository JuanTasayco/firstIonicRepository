import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';

export interface SuperHeroe {
  "superhero": string,
  "publisher": string,
  "alter_ego": string,
  "first_appearance": string,
  "characters": string
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  getSuperheroes(): Observable<SuperHeroe[]> {
    return this.httpClient.get<SuperHeroe[]>('assets/data/superheroes.json').pipe(delay(2000));
  }
}
