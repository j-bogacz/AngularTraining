import { Directive, ElementRef, Input, OnInit, HostListener} from '@angular/core';
import { Playlist } from '../playlist';

@Directive({
  selector: '[bartHighlight]'
})
export class HighlightDirective {

  @Input("bartHighlight") highligtColor:string = 'black';
  @Input() defaultColor:string = 'green';
  constructor(private gl: ElementRef) {
    console.log(gl);
    this.gl.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  onInit() {
    console.log(this.highligtColor);
    this.gl.nativeElement.style.borderLeftColor = this.defaultColor;
  }
  @HostListener('mouseenter')
  enter() {
    this.gl.nativeElement.style.borderLeftColor = this.highligtColor;

  }

  @HostListener('mouseleave')
  exit() {
    this.gl.nativeElement.style.borderLeftColor = this.defaultColor;
  }
}
