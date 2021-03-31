import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string
  link: string
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent implements OnInit {
  selectedIndex = -1
  @Input() menus: TopMenu[] = []
  @Input() backgroundColor = '#fff'
  @Input() titleActiveColor = 'yellow'
  @Input() titleColor = 'blue'
  @Input() indicatorColor = 'brown'
  @Output() tabSelected = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  handleSelection(index: number) {
    this.selectedIndex = index
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

  trackByFn(index, item) {
    return index
  }
}
