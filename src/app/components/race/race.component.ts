import { RaceService } from './../../services/race.service';
import { CapitalizePipe } from './../../pipes/capitalize.pipe';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import Poney from '../../interfaces/poney.interface';
import Race from '../../interfaces/race.interface';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Component({
  selector: 'pn-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {

  @Input() race: Race;
  @Output() racing: EventEmitter<string>= new EventEmitter();

  ponies: Poney[];
  ponies$: Observable<Poney[]>;
  
  raceInterval: any;
  // observable to get the id of the course from the activated route
  id$: Observable<number>;
  constructor(
    private capitalize: CapitalizePipe,
    private raceService: RaceService,
    private activatedRoute: ActivatedRoute
    )
    {
      this.id$ = this.activatedRoute.params.map(params => {
        return parseInt(params.id);
      })
    }

  ngOnInit() {
    this.id$.subscribe(id => {
      let poneyIds = this.raceService.getRace(id).ponies;

      this.ponies$ = this.raceService.getPoniesById(poneyIds);
      
      this.ponies$.subscribe(ponies => {
        this.ponies = ponies

        this.startRace();
      })
    })
      
  }

  handlePoneyReady(name: string) {
    console.log('Poney ready : ' + name)
  }

  generateDistance(min: number, max: number): number{
      return Math.floor(Math.random() * (max - min + 1)) + min
    
  }

  startRace(){
    this.ponies.forEach(poney => {
      poney.distance = 0

      this.raceInterval = window.setInterval(() => {
        poney.distance += this.generateDistance(1, 10);
        
        if (poney.distance >= 80) {
          this.stopRace(poney);
          return;
        }
      }, 1000);
    })

  }

  stopRace(winner?: Poney){
    clearInterval(this.raceInterval);
    if(winner){console.log(`le vainqueur est ${this.capitalize.transform(winner.name)}`);}
    
    this.ponies.forEach(poney => {
      poney.distance = 0; 
    });
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.stopRace();
  }
  
}
