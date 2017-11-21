import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';
import {propertyNames} from "@angular/language-service/src/html_info";

@Directive({
  selector: '[directive-highlight]'
})
export class HighlightDirective implements OnInit {

  @Input()
  propertyName: string;

  @Input()
  highlightedColor: string;

  @Input()
  defaultColor: string;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.Highlight(this.defaultColor);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.Highlight(this.highlightedColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.Highlight(this.defaultColor);
  }

  private Highlight(color: string) {
    this.el.nativeElement.style[this.propertyName] = color;
  }
}
