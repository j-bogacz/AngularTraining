import {Directive, ElementRef, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective {
  hover: boolean = false;
  @Input() defaultColor: string = 'black';
  @Input('lekarzHighlight') color: string;

  constructor(private el: ElementRef) {
    console.log(el);

  }

  @HostBinding('style.borderLeftColor')
  get getColor(){
    return this.hover ? this.color : this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover = true;
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.hover = false;
  }



}
