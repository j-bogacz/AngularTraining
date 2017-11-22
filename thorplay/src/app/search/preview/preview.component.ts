import {Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'kuku-preview',
  templateUrl: './preview.component.html',
  styles: [`
    .mojmodal {
      display: block;
      opacity: 1;
    }
  `],
  encapsulation: ViewEncapsulation.Emulated
})
export class PreviewComponent {
  @Input('picUrl') url: string;
  @Input('picTitle') title: string;

  public visible = false;
  private visibleAnimate = false;

  constructor() {
  }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
