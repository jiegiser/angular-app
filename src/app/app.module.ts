import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './components';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { HorizontalGridComponent } from './components/horizontal-grid/horizontal-grid.component';

@NgModule({
  // 该模块有哪些组件
  declarations: [
    AppComponent,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ],
  // 该模块依赖哪些模块
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // 根模块显示的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
