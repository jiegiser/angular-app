import { Directive, ElementRef, Input, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective {
  // 可以接收传入的值
  @Input() appGridItemImage = '2rem'
  @Input() fitMode = 'cover'

  constructor(private elr: ElementRef, private rd2: Renderer2) {}

  ngOnInit() {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-srea', 'image')
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage)
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage)
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitMode)
  }

  // 第一个参数为事件名，第二个参数为事件所携带的数据
  @HostListener('click', ['$event.target'])
  handleClick(ev) {
    console.log(ev)
  }
}
