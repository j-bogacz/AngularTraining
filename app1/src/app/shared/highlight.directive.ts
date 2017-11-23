import {Directive, ElementRef, Input, OnInit, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[abcHighlight]'
})
export class HighlightDirective {
  hover: boolean;
  @Input('abcHighlight') color: string = 'black';
  @Input() defaultcolor: string = 'green';

  constructor(private el: ElementRef) {
    //console.log(el);

    el.nativeElement.style.borderLeftColor = this.color;
  }

  ngOnInit() {
    this.el.nativeElement.style.borderLeftColor = this.defaultcolor;
  }

  @HostBinding('style.borderLeftColor')
  get getColor(){
    return this.hover ? this.color : this.defaultcolor;
  }

  @HostListener('mouseenter', ['$event'])
  mouseenter() {
    this.hover = true;
  }

  @HostListener('mouseleave', ['$event'])
  mouseleave() {
    this.hover = false;
  }

}
