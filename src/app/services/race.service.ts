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

  getRaces(): Race[]{
    return this.races;
  }
}
