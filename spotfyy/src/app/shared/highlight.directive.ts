import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective implements OnInit {
  hover: boolean = false;
  @Input('lekarzHighlight') highlightColor:string = 'black';
  @Input() defaultColor:string = 'green';
  constructor(private el: ElementRef) {
  }
  ngOnInit(){
    //this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }
  @HostBinding('style.borderLeftColor')
  get getColor(){
    return this.hover ? this.highlightColor : this.defaultColor;
  }
  @HostListener('mouseenter')
  enter() {
    this.hover = true;
  }
  @HostListener('mouseleave')
  exit() {
    this.hover = false;
  }
}
