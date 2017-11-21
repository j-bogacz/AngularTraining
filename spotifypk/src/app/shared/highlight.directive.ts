import {Directive, Input, Output, EventEmitter, ElementRef, OnInit, HostListener} from '@angular/core';
import { Playlist } from '../playlist';

@Directive({
  selector: '[lekarzHighlight]'
})
export class HighlightDirective implements OnInit{

  selected: Playlist;
  @Input('lekarzHighlight') hightlightColor:string = 'black';
  @Input() defaultColor:string = 'black';

  constructor(private el: ElementRef) {
    console.log(el);
    el.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  ngOnInit(){
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  mouseEnter(){
    this.el.nativeElement.style.borderLeftColor = this.hightlightColor;
  }

  @HostListener('mouseleave', ['$event'])
  mouseLeave(event: Event){
    console.log(event);
    this.el.nativeElement.style.borderLeftColor = this.defaultColor;
  }
}
