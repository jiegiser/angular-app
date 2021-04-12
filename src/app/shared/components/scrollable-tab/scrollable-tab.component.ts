import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

export interface TopMenu {
  title: string
  link: string
  id: number
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})

export class ScrollableTabComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  selectedIndex = -1
  @Input() menus: TopMenu[] = []
  @Input() backgroundColor = '#fff'
  @Input() titleActiveColor = 'yellow'
  @Input() titleColor = 'blue'
  @Input() indicatorColor = 'brown'
  @Output() tabSelected = new EventEmitter()

  /**
   * 构造函数永远首先被调用
   */
  constructor() { }

  /**
   * 组件初始化完成，在这个函数中，我们可以安全的使用组件的属性和方法
   */
  ngOnInit(): void {
  }

  handleSelection(index: number) {
    this.selectedIndex = index
    this.tabSelected.emit(this.menus[this.selectedIndex])
  }

  trackByFn(index, item) {
    return index
  }

  // 监听自己组件本身数值变化-输入值的变化 @Input 属性发生变化
  // 参数为索引对象，key 为属性的名字，value 为 SimpleChanges
  ngOnChanges(value: SimpleChanges) {
    console.log(value)
  }

  /**
   * 组件内容初始化
   */
  ngAfterContentInit() {

  }

  /**
   * 组件内容脏值检测
   */
  ngAfterContentChecked() {

  }

  /**
   * 组件视图初始化-组件和他的子组件都初始化完成
   */
  ngAfterViewInit() {

  }

  /**
   * 组件视图的脏值检测
   */
  ngAfterViewChecked() {

  }

  /**
   * 组件销毁时执行
   */
  ngOnDestroy() {

  }
  // ngDoCheck() {
  //   console.log('组件脏值监测')
  // }
  
}
