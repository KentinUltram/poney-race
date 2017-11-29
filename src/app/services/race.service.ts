import { Injectable } from '@angular/core';
import Poney from '../interfaces/poney.interface';
import Race from '../interfaces/race.interface';

@Injectable()
export class RaceService {
  
  races: Race[] = [
      {
        id: 1,
        name: "monte-carlo",
        ponies:[1,2]
      },
      {
        id: 2,
        name: "24h du mans",
        ponies:[1,2,3]
      },
      {
        id: 3,
        name: "GP de monaco",
        ponies:[2,3]
      }


  ];
  ponies: Poney[] = [
    {
      id: 1,
      name: "jackjack",
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif",
      distance: 0
    },
    {
      id: 2,
      name: "jeanne",
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif",
      distance: 0
    },
    {
      id: 3,
      name: "serge",
      img: "http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif",
      distance: 0
    }
  ];
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
}
