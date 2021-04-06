import { Component } from '@angular/core';
import { TopMenu, ImageSlider } from './shared/components';
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
  
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://media.istockphoto.com/photos/breaking-news-3d-rendering-virtual-set-studio-picture-id1219965949?k=6&m=1219965949&s=612x612&w=0&h=DAVpuv8PXix6xCbD0J08AMqlO8NS1vPMml3ii4wO728=',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/breaking-news-3d-rendering-virtual-set-studio-picture-id1219965949?k=6&m=1219965949&s=612x612&w=0&h=DAVpuv8PXix6xCbD0J08AMqlO8NS1vPMml3ii4wO728=',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/working-that-social-networking-picture-id1155621260?k=6&m=1155621260&s=612x612&w=0&h=KBmE6fRvWCPXWMhrjewBdnIeMgGE3-H2te58Wo2kc3U=',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/close-up-on-man-hand-using-tab-pad-on-laptop-to-working-about-of-picture-id1169192820?k=6&m=1169192820&s=612x612&w=0&h=ZLne-VuwHxk5JkLj4_YWsg2agj_ACShDQJ9uTBylDQM=',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?k=6&m=1177502660&s=612x612&w=0&h=JZjp6Ul217IbMYDD__bGGaBG_Kuj-s_D5Rq7wT-Cnh8=',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/newspapers-and-laptop-picture-id1140728159?k=6&m=1140728159&s=612x612&w=0&h=ZwkM-UgmoVjUUYywiinOwV1qG_cmnKd5EBIJKLol_mA=',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://media.istockphoto.com/photos/closeup-of-a-persons-hand-using-digital-tablet-picture-id958332892?k=6&m=958332892&s=612x612&w=0&h=ib6ITme5nMYVtQytCVIw_0Uo9k0FoGsTBkEYoYEDs9U=',
      link: '',
      caption: ''
    }
  ]
  handleTabSelected(topMenu: TopMenu) {
    console.log(topMenu)
  }
}
