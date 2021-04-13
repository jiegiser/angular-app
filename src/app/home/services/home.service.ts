import { Injectable } from '@angular/core';
import { Channel, ImageSlider, TopMenu } from 'src/app/shared/components';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class HomeService {
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

  channels: Channel[] = [{
    id: 1,
    title: '限时秒杀',
    icon: 'https://img.pddpic.com/goods/2020-01-14/9023c6c212ca7ed147ddfa28c1a13c59.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 2,
    title: '签到',
    icon: 'https://img.pddpic.com/goods/2020-02-24/1ac41ebf88457e29ac4f8b5a01e72f1d.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 3,
    title: '医药馆',
    icon: 'https://img.pddpic.com/goods/2020-02-26/f9e3069d2e461cd5f5eb7d77ffce9d9d.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 4,
    title: '充值中心',
    icon: 'https://img.pddpic.com/goods/2020-01-14/0fab520471880b5728fb7150d77f5390.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 5,
    title: '发现好货',
    icon: 'https://img.pddpic.com/goods/2020-04-19/ecdc795c12e256a869a883f247ccdc5d.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 6,
    title: '9块9特卖',
    icon: 'https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 7,
    title: '多多果园',
    icon: 'https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 8,
    title: '断码清仓',
    icon: 'https://commimg.pddpic.com/oms_img_ng/2021-04-08/596a621a-a8a5-45cd-9686-f0e08e7a9c1e.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 9,
    title: '限时秒杀',
    icon: 'https://img.pddpic.com/goods/2020-04-29/798a43c5ae721a5d3dbbcbd5f95488db.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 10,
    title: '天天领现金',
    icon: 'https://img.pddpic.com/goods/2020-01-14/268178927edd263209650e1c189f5662.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 11,
    title: '砍价免费拿',
    icon: 'https://img.pddpic.com/goods/2020-01-14/106c4357375875825f204a28cd7d3387.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 12,
    title: '省钱月卡',
    icon: 'https://img.pddpic.com/goods/2020-01-14/54ece7ca8c54cd8925d631323659e42f.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 13,
    title: '9块9特卖',
    icon: 'https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 14,
    title: '多多果园',
    icon: 'https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 15,
    title: '断码清仓',
    icon: 'https://commimg.pddpic.com/oms_img_ng/2021-04-08/596a621a-a8a5-45cd-9686-f0e08e7a9c1e.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 16,
    title: '限时秒杀',
    icon: 'https://img.pddpic.com/goods/2020-04-29/798a43c5ae721a5d3dbbcbd5f95488db.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 17,
    title: '天天领现金',
    icon: 'https://img.pddpic.com/goods/2020-01-14/268178927edd263209650e1c189f5662.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 18,
    title: '砍价免费拿',
    icon: 'https://img.pddpic.com/goods/2020-01-14/106c4357375875825f204a28cd7d3387.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 19,
    title: '9块9特卖',
    icon: 'https://img.pddpic.com/goods/2020-01-14/8ed387bd5d07f45ce6fee30a0ab80e80.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  },
  {
    id: 20,
    title: '多多果园',
    icon: 'https://img.pddpic.com/goods/2020-01-14/b39df4af9b17ba0d063c04da0aea85aa.png?imageView2/2/w/117/q/80/format/webp',
    link: ''
  }]
  constructor() { }

  getTabs() {
    return this.topMenu
  }

  getChannels() {
    return this.channels
  }

  getBanners() {
    return this.imageSliders
  }
}
