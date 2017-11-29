import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../services/race.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Http } from '@angular/http';

@Component({
  selector: 'pn-race-create',
  templateUrl: './race-create.component.html',
  styleUrls: ['./race-create.component.css']
})
export class RaceCreateComponent implements OnInit {

  race: FormGroup

  constructor(private raceService: RaceService, private http: Http) {
    this.race = new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(2),
        (control) => {return this.uniqueNameValidator(control)}
      ])
    });
  }

  uniqueNameValidator(control): any{
    if(this.raceService.isRaceNameUnique(control.value)){
      return null
    } else {
        return {unique: true};
    }
      
  }

  ngOnInit() {
  }

  handleSubmit(){
    this.http.post('http://localhost:3000/races', {
      name: this.race.value.name,
      id: this.raceService.races.length +1,
      ponies: [1,2]
    })
    console.log(this.race);
  }
}
