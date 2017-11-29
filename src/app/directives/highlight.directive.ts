import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[pnHighlight]'
})
export class HighlightDirective {

  // @Input() bgColor: string ='green';
  @Input('pnHighlight') bgColor: string ='silver';
  @Input() hoverColor: string = 'silver';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.changeBackgroundColor(this.bgColor);
  }

  changeBackgroundColor(color: string){
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') handleMouseEnter(){
    this.changeBackgroundColor(this.hoverColor);
  }
  @HostListener('mouseleave') handleMouseLeave(){
    this.changeBackgroundColor(this.bgColor);
  }
}
