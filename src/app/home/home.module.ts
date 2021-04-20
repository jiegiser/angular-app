import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeDetailComponent, HomeContainerComponent, AgoPipe } from './components';
import { HomeService, token } from './services';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, AgoPipe],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    AgoPipe
  ],
  providers: [
    HomeService,
    {
      provide: token,
      useValue: 'http://api'
    }
  ]
})
export class HomeModule { }
