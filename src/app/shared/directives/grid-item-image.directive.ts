import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
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
}
