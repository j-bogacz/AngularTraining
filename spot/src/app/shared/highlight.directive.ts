import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[mkHighlight]'
})
export class HighlightDirective {

  @Input('mkHighlight') highlightColor: string = 'black';
  @Input('mkDefaultHighlight') defaultColor: string = '#9E9E9E';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.borderLeftColor = this.highlightColor;
    this.el.nativeElement.style.backgroundColor = '#fffdfa';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
    this.el.nativeElement.style.backgroundColor = 'white';
  }

}
