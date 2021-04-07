import { Component, OnInit } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

export interface Channel {
  id: number
  icon: string
  title: string
  link: string
}

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
  channels: Channel[] = [{
    id: 1,
    title: '限时秒杀',
    icon: '',
    link: ''
  }]
  ngOnInit(): void {
  }

  @Confirmable('您确认要执行吗')
  handleClick() {
    console.log('点击执行')
  }

}
