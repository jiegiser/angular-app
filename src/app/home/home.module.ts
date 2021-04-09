import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeDetailComponent, HomeContainerComponent } from './components';

@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
