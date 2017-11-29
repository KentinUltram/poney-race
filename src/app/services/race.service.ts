import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney.interface';
import Race from '../interfaces/race.interface';

@Injectable()
export class RaceService {
  
  races: Race[] ;
  ponies: Poney[];
  constructor() { }

  getPonies(): Poney[]{
    return this.ponies;
  }

  getPoniesById(ids :number[]): Poney[]{
    return this.ponies.filter(poney => {
      return ids.includes(poney.id);
    });
  }
  getRaces(): Race[]{
    return this.races;
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
