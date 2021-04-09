import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home';

@NgModule({
  // 该模块有哪些组件
  declarations: [
    AppComponent
  ],
  // 该模块依赖哪些模块
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  // 根模块显示的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
