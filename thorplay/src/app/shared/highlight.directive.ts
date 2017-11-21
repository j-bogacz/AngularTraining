import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[kukuHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('kukuHighlight') elementColor: string;
  @Input() defaultColor: string;
  hover: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('style.borderLeftColor')
  get getColor() {
    return this.hover ? this.elementColor || this.defaultColor || 'red' : 'transparent';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hover = false;
  }

  ngOnInit() {
    this.highlight(null);
  }

  @HostListener('document:click', ['$event.target', '$event.x'])
  checkcClick(event: Event, x: number) {
    console.log('event:' + JSON.stringify(event));
    console.log('event.X:' + x);
  }

  private highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'border-left-color', color);
  }
}
