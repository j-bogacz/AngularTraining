import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[mkHighlight]'
})
export class HighlightDirective {
  hover: boolean;

  @Input('mkHighlight') highlightColor: string = 'black';
  @Input('mkDefaultHighlight') defaultColor: string = '#9E9E9E';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  @HostBinding('style.borderLeftColor')
  get getColor() {
    return this.hover ? this.highlightColor : this.defaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }

}
