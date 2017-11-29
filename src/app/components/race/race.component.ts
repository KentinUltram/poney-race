import { RaceService } from './../../services/race.service';
import { CapitalizePipe } from './../../pipes/capitalize.pipe';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import Poney from '../../interfaces/poney.interface';
import Race from '../../interfaces/race.interface';

@Component({
  selector: 'pn-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input() race: Race;
  @Output() racing: EventEmitter<string>= new EventEmitter();

  ponies: Poney[];
  
  raceInterval: any;
  constructor(
    private capitalize: CapitalizePipe,
    private raceService: RaceService
    ) { }

  ngOnInit() {
    this.ponies = this.raceService.getPonies();
    this.startRace();
      
  }

  handlePoneyReady(name: string) {
    console.log('Poney ready : ' + name)
  }

  generateDistance(min: number, max: number): number{
      return Math.floor(Math.random() * (max - min + 1)) + min
    
  }

  startRace(){
    this.raceInterval = window.setInterval(() => {
      /*this.ponies.forEach(poney => {
        if (poney.distance >= 90) {
          this.stopRace(poney);
          return;
        }
        if (!poney.distance) poney.distance = 0;
  
        poney.distance += this.generateDistance(1, 10);

        
      });*/
      for (let poney of this.ponies){
        if (poney.distance >= 90) {
          this.stopRace(poney);
          break;
        }
        if (!poney.distance) poney.distance = 0;
  
        poney.distance += this.generateDistance(1, 10);
      }
    }, 1000);

  }

  stopRace(winner: Poney){
    clearInterval(this.raceInterval);
    console.log(`le vainqueur est ${this.capitalize.transform(winner.name)}`);
    this.ponies.forEach(poney => {
      poney.distance = 0; 
    });

  }
}
