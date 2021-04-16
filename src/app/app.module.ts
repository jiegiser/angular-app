import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule, ParamsInterceptor, NotificationInterceptor } from './home';

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
    HttpClientModule,
    HomeModule,
  ],
  providers: [
    {
      // HTTP_INTERCEPTORS 用于多个对象的一个令牌
      provide: HTTP_INTERCEPTORS,
      useClass: ParamsInterceptor,
      multi: true
    },
    {
      // HTTP_INTERCEPTORS 用于多个对象的一个令牌
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true
    }
  ],
  // 根模块显示的组件
  bootstrap: [AppComponent]
})
export class AppModule { }
