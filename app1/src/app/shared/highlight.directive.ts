import { Directive , ElementRef, Input, OnInit, HostListener} from '@angular/core';

@Directive({
  selector: '[abcHighlight]'
})
export class HighlightDirective {

  @Input('abcHighlight') color: string = 'black';
  @Input() defaultcolor: string = 'green';
  constructor(private el: ElementRef) {
    console.log(el);

    el.nativeElement.style.borderLeftColor = this.color;
 }

 ngOnInit(){
   this.el.nativeElement.style.borderLeftColor = this.defaultcolor;
 }

 @HostListener('mouseenter', ['$event'])
  mouseenter(){
   this.el.nativeElement.style.borderLeftColor = this.color;
   }

  @HostListener('mouseleave', ['$event'])
    mouseleave(){
    this.el.nativeElement.style.borderLeftColor = this.defaultcolor;
    }

}
