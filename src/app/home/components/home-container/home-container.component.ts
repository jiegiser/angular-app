import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopMenu } from 'src/app/shared/components';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  topMenu: TopMenu[] = [
    {
      title: '热门',
      link: 'hot',
      id: 1
    }, {
      title: '男装',
      link: 'men',
      id: 2
    }, {
      title: '手机',
      link: 'phone',
      id: 3
    }, {
      title: '食品',
      link: 'food',
      id: 4
    }, {
      title: '医药',
      link: 'yiyao',
      id: 5
    }, {
      title: '运动',
      link: 'sport',
      id: 6
    }, {
      title: '鞋包',
      link: 'xiebao',
      id: 7
    }, {
      title: '家装',
      link: 'jiazhuang',
      id: 8
    }, {
      title: '水果',
      link: 'shuiguo',
      id: 9
    }, {
      title: '电器',
      link: 'dianqi',
      id: 10
    }, {
      title: '车品',
      link: 'cheping',
      id: 11
    }, {
      title: '美妆',
      link: 'meizhuang',
      id: 12
    }, {
      title: '手机',
      link: 'shouji',
      id: 13
    }, {
      title: '电脑',
      link: 'diannao',
      id: 14
    }, {
      title: '海淘',
      link: 'haitao',
      id: 15
    }, {
      title: '饰品',
      link: 'shiping',
      id: 16
    }, {
      title: '玩乐',
      link: 'wanle',
      id: 17
    }, {
      title: '母婴',
      link: 'muyin',
      id: 18
    }
  ]
  route: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link])
  }
}
