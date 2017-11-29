import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'pn-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.css']
})
export class RaceCreateComponent implements OnInit {

  race: FormGroup

  constructor(private raceService: RaceService) {
    this.race = new FormGroup({
      name: new FormControl()
    });
   }

  ngOnInit() {
  }

}
