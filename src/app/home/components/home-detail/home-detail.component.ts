import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit, OnDestroy {
  // imageSliders$: Observable<ImageSlider[]>
  imageSliders:ImageSlider[] = []
  channels: Channel[] = []
  constructor(private route: ActivatedRoute, private service: HomeService) { }
  selectedTabLink$: Observable<string>

  sub: Subscription
  ngOnInit(): void {
    this.selectedTabLink$ = this.route.paramMap
    // 判断过滤有 tabLink 的参数
    .pipe(
      filter(params => params.has('tabLink')),
      // 只获取 tabLink 参数
      map(params => params.get('tabLink'))
    )
    this.imageSliders = this.service.getBanners()
    this.channels = this.service.getChannels()
    // this.imageSliders$ = this.service.getBanners()

    this.sub = this.route.queryParamMap.subscribe(params => {
      console.log(params)
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
