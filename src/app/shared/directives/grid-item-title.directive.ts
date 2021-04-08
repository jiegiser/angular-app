import { Directive, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective {

  @HostBinding('style.font-size') @Input() appGridItemTitle = '1rem'
  @HostBinding('style.grid-area') area = 'title'
  constructor(private elr: ElementRef, private rd2: Renderer2) {}
}
