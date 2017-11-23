import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input('lekarzHighlight')
  highlightColor: string;

  defaultCol: string = 'white';

  hover:boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
    el.nativeElement.style.borderLeftColor = this.highlightColor;
    console.log(this.highlightColor);
  }

  ngOnInit() {
    this.el.nativeElement.style.borderLeftColor = this.defaultCol;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover = false;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover = true;
  }
  //
  // private highlight(color: string) {
  //   this.renderer.setStyle(this.el.nativeElement,'border-left-color', color)
  //   //this.el.nativeElement.style.borderLeftColor = color;
  // }

  @HostListener('document:click', ['$event.x', '$event'])
    enter(x: number, event: Event){
    //console.log(x, "  ", event);
  }

  @HostBinding('style.borderLeftColor')
  get getColor(){
      return this.hover ? this.defaultCol: this.highlightColor;
  }
}
