import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Channel, ImageSlider } from 'src/app/shared/components';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {
  imageSliders: ImageSlider[] = []

  channels: Channel[] = []
  constructor(private route: ActivatedRoute, private service: HomeService) { }
  selectedTabLink
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedTabLink = params.get('tabLink')
    })
    this.imageSliders = this.service.getBanners()
    // this.service.getBanners().subscribe(tabs => {
    //   this.imageSliders = tabs
    // })
    this.channels = this.service.getChannels()
  }

}
