import { Directive, ElementRef, Input, OnInit, HostListener, HostBinding, Renderer2} from '@angular/core';
import { Playlist } from '../playlist';

@Directive({
  selector: '[bartHighlight]'
})
export class HighlightDirective {
  hover:boolean = false;
  @Input("bartHighlight") highligtColor:string = 'black';
  @Input() defaultColor:string = 'green';
  constructor(private gl: ElementRef, private renderer: Renderer2) {
    console.log(gl);
    this.gl.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  onInit() {
    console.log(this.highligtColor);
    this.gl.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  @HostBinding('style.borderLeftColor')
  get getColor() {
    return this.hover ? this.highligtColor : this.defaultColor;
  }

  @HostListener('mouseenter')
  enter() {
    //this.renderer.setStyle(this.gl.nativeElement,
   //  'border-left-color',
   //this.highligtColor);
   this.hover = true;
    //this.gl.nativeElement.style.borderLeftColor = this.highligtColor;

  }

  @HostListener('mouseleave')
  exit() {
    this.hover = false;
  }
}
