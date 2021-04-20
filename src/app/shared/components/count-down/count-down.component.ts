import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  @Input() startDate = new Date()
  @Input() futureDate: Date
  countDown$: Observable<string>
  private _MS_PER_SECOND = 1000
  constructor() { }

  ngOnInit(): void {
    this.countDown$ = this.getCountDownObservable(this.startDate, this.futureDate)
  }

  private diffInSec = (start: Date, future: Date): number => {
    const diff = future.getTime() - start.getTime()
    return Math.floor(diff /this._MS_PER_SECOND)
  }

  private getCountDownObservable(startDate: Date, futureDate: Date) {
    // 定时，每隔一定时间会执行流中内容。
    return interval(1000).pipe(
      map(elapse => this.diffInSec(startDate, futureDate) - elapse),
      // 条件表达式为真结束流，与 filter 的区别就是，filter 不会结束流，只是过滤了值，并不会不再订阅。
      takeWhile(gap => gap >= 0),
      tap(val => console.log(val)),
      map(sec => ({
        day: Math.floor(sec / 3600 / 24),
        hour: Math.floor((sec / 3600) % 24),
        minute: Math.floor((sec / 60) % 60),
        second: Math.floor(sec % 60)
      })),
      map(({ hour, minute, second }) => `${hour}:${minute}: ${second}`)
    )
  }
}
