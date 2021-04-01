import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  // 该模块有哪些组件
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent
  ],
  // 该模块依赖哪些模块
  imports: [
    BrowserModule
  ],
  providers: [],
  // 根模块显示的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
