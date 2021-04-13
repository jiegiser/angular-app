import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeDetailComponent, HomeContainerComponent, HomeGrandComponent, AgoPipe } from './components';
import { HomeService } from './services';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent, HomeGrandComponent, AgoPipe],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    AgoPipe
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
