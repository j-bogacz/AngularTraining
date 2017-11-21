import {Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input('lekarzHighlight')
  highlightColor: string;

  defaultCol: string = 'green';

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.borderLeftColor = this.highlightColor;
    console.log(this.highlightColor);
  }

  ngOnInit() {
    this.el.nativeElement.style.borderLeftColor = this.defaultCol;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('green');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.borderLeftColor = color;
  }

  @HostListener('document:click', ['$event.x', '$event'])
    enter(x: number, event: Event){
    console.log(x, "  ", event);
  }

}
