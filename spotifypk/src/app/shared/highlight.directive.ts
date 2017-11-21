import {Directive, Input, Output, EventEmitter, ElementRef, OnInit, HostListener, Renderer2, HostBinding} from '@angular/core';
import { Playlist } from '../playlist';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective implements OnInit{

  hover: boolean;
  @Input('lekarzHighlight') hightlightColor:string = 'black';
  @Input() defaultColor:string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el);
    this.renderer.setStyle(this.el.nativeElement, 'borderLeftColor', this.defaultColor);
  }

  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement, 'borderLeftColor', this.defaultColor);
  }

  @HostBinding('style.borderLeftColor')
  get getColor(){
    return this.hover ? this.hightlightColor : this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseEnter(){
    this.hover = true;
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: Event){
    console.log(event);
    this.hover = false;
  }
}
