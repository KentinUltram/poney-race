import { Component, OnInit } from '@angular/core';
import Race from '../../interfaces/race.interface';
import { RaceService } from '../../services/race.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'pn-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  races$: Observable<Race[]>;
  constructor(private raceService: RaceService) { }

  ngOnInit() {
    this.races$ = this.raceService.getRaces();
  }

}
