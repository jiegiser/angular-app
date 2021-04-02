import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';

export interface ImageSlider {
  imgUrl: string
  link: string
  caption: string
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() sliders: ImageSlider[] = []
  @Input() sliderHeight = '160px'
  // 轮播时间间隔
  @Input() intervalBySeconds = 2
  // static 是否为静态，在 if 或者 for 中包含的是 false
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef
  selectIndex: number = 0
  intervalId

  constructor(
    // 依赖注入
    private rd2: Renderer2
  ) { }

  ngOnInit(): void {
    console.log(this.imgSlider)
  }

  ngAfterViewInit() {
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft', (this.getIndex(++ this.selectIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length)
    }, this.intervalBySeconds * 1000)
  }

  getIndex(idx: number): number {
    return idx >= 0 ? idx % this.sliders.length : this.sliders.length - Math.abs(idx) % this.sliders.length
  }

  handleScroll(ev) {
    const ratio =  (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth
    this.selectIndex = Math.round(ratio)
  }

  ngOnDestroy() {
    clearInterval(this.intervalId)
  }
}
