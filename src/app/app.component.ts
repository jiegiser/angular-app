import { Component } from '@angular/core';
import { TopMenu } from './components';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topMenu: TopMenu[] = [
    {
      title: '热门',
      link: ''
    }, {
      title: '男装',
      link: ''
    }, {
      title: '手机',
      link: ''
    }, {
      title: '食品',
      link: ''
    }, {
      title: '医药',
      link: ''
    }, {
      title: '运动',
      link: ''
    }, {
      title: '鞋包',
      link: ''
    }, {
      title: '家装',
      link: ''
    }, {
      title: '水果',
      link: ''
    }, {
      title: '电器',
      link: ''
    }, {
      title: '车品',
      link: ''
    }, {
      title: '美妆',
      link: ''
    }, {
      title: '手机',
      link: ''
    }, {
      title: '电脑',
      link: ''
    }, {
      title: '海淘',
      link: ''
    }, {
      title: '饰品',
      link: ''
    }, {
      title: '玩乐',
      link: ''
    }, {
      title: '母婴',
      link: ''
    }
  ]
  
  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu)
  }
}
