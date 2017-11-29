import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import Poney from '../../interfaces/poney.interface';


@Component({
  selector: 'pn-poney',
  templateUrl: './poney.component.html',
  styleUrls: ['./poney.component.scss']
})
export class PoneyComponent implements OnInit {
  @Input() poney: Poney;
  @Output() ready: EventEmitter<string>= new EventEmitter();
  constructor(private elementRef: ElementRef) { }

// links http://ponyracer.ninja-squad.com/assets/images/pony-orange-running.gif
// http://ponyracer.ninja-squad.com/assets/images/pony-purple-running.gif
// http://ponyracer.ninja-squad.com/assets/images/pony-green-running.gif

  ngOnInit() {
    this.ready.emit(this.poney.name);
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.background = "silver";
  }
}
