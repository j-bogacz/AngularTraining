import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[kukuHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('kukuHighlight') elementColor: string;
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.elementColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('transparent');
  }

  ngOnInit() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.borderLeftColor = color;
  }
}
