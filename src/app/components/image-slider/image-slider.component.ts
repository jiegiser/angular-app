import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = []
  // static 是否为静态，在 if 或者 for 中包含的是 false
  @ViewChild('imageSlider', { static: true }) imgSlider: ElementRef
  constructor() { }

  ngOnInit(): void {
    console.log(this.imgSlider)
  }

}
