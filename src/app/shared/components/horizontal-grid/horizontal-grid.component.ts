import { Component, OnInit } from '@angular/core';
import { Emoji } from '../../decorators';

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {
  username = ''
  constructor() { }
  // 实现自定义注解
  @Emoji() result = 'Hello'

  ngOnInit(): void {
  }

  // @Confirmable('您确认要执行吗')
  handleClick() {
    console.log('点击执行')
  }

}
