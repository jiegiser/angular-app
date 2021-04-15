import { formatDate } from '@angular/common';
import { Component, OnInit, AfterViewChecked, NgZone, ViewChild, ElementRef, Renderer2, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, AfterViewChecked {
  _title
  _time
  @Input() str: string = ''
  @ViewChild('timeRef', { static: true }) timeRef: ElementRef
  public get title() {
    console.log('脏值检测')
    return this._title
  }

  
  public get time() : number {
    return this._time
  }
  
  constructor(private ngZone: NgZone, private rd2: Renderer2, private cd: ChangeDetectorRef) {
    this._title = 'hi'
  }
  ngOnInit(): void {
    // 手动触发，进行脏值检测
    this.cd.markForCheck()
  }

  ngAfterViewChecked() {
    // 运行在 angular 之外的 task
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        // this.timeRef.nativeElement.innerText = Date.now()
        this.rd2.setProperty(
          this.timeRef.nativeElement,
          'innerText',
          formatDate(Date.now(), 'HH:mm:ss:SSS', 'en-US')
        )
      }, 100)
    })
  }

  handleClick() {

  }
}
