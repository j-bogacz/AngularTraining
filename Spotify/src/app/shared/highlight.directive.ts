import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[directive-highlight]'
})
export class HighlightDirective implements OnInit {

  hovered: boolean;

  @Input()
  propertyName: string;

  @Input()
  highlightedColor: string;

  @Input()
  defaultColor: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.Highlight(this.defaultColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
    // this.Highlight(this.highlightedColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    // this.Highlight(this.defaultColor);
  }

  /* private Highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, this.propertyName, color);
  } */

  @HostBinding('style.borderRightColor')
  get getColor() {
    return this.hovered ? this.highlightedColor : this.defaultColor;
  }
}
