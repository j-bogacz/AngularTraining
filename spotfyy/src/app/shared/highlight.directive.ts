import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit} from '@angular/core';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('lekarzHighlight') highlightColor:string = 'black';
  @Input() defaultColor:string = 'green';
  constructor(private el: ElementRef) {
  }
  ngOnInit(){
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }
  @HostListener('mouseenter')
  enter(){
    this.el.nativeElement.style.borderLeftColor = this.highlightColor;
  }
  @HostListener('mouseleave')
  exit(){
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }
}
