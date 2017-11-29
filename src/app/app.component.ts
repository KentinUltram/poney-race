import { Component } from '@angular/core';
import Poney from './interfaces/poney.interface';
@Component({
  selector: 'pn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Poney-Race';

  /*names: string[]= [
    "JackJack",
    "Jeanne",
    "Serge"
];*/

  distance: number = 0;

  

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(() => {
      this.distance += 5;
      
      
    }, 1000);
  }
handlePoneyReady(name: string){
    console.log(`Poney Ready:`, name);
  }


}
