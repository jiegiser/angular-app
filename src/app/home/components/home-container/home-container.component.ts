import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TopMenu } from 'src/app/shared/components';
import { HomeService, token } from '../../services';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  topMenu: TopMenu[] = []
  route: any;
  constructor(
    private router: Router,
    private service: HomeService,
    @Inject(token) private baseUrl: string
    ) { }

  ngOnInit(): void {
    this.topMenu = this.service.getTabs()
    console.log(this.baseUrl, 'baseUrl')
  }
  handleTabSelected(topMenu: TopMenu) {
    this.router.navigate(['home', topMenu.link])
  }
}
