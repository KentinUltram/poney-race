import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney.interface';
import Race from '../interfaces/race.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class RaceService {
  
  races: Race[] ;
  ponies: Poney[];
  constructor(private http: Http) { }

  getPonies(): Observable<Poney[]>{
    let ponies$ =  this.http.get("http://localhost:3000/ponies").map(res => {
      return res.json()
    });
    ponies$.subscribe(ponies => {
      this.ponies = ponies});
    return ponies$;
  }

  getPoniesById(ids :number[]): Observable<Poney[]>{
    let ponies$ = this.getPonies().map(ponies => {
      return ponies.filter(poney => {
      return ids.includes(poney.id);
    })
    });

    return ponies$;
  }
  getRaces(): Observable<Race[]>{
    let races$= this.http.get("http://localhost:3000/races").map(res => {
      return res.json()
    });
    races$.subscribe(races => {
      this.races = races
    });
    return races$;
  }

  getRace(id: number): Race{
    return this.races.find(race => {
      return race.id == id;
    });
  }

  isRaceNameUnique(name: string): boolean{
    return !this.races.find(race => {
      return race.name.toLowerCase() == name.toLowerCase();
    });
  }
}
