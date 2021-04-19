import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild('inputRef', { static: true }) inputRef: ElementRef
  constructor() { }

  ngOnInit(): void {
    // 将 input 事件转换成事件流；观察 input 事件
    fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev: any) => console.log(ev.target.value))
  }

}
