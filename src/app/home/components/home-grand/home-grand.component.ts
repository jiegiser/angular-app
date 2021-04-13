import { Component, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string) {

  }
}
@Injectable()
class PurchaseOrder {
  private amount: number
  constructor(
    private product: Product
  ) {}
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const token = new InjectionToken<string>('baseUrl')
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          // useClass: Product,
          useFactory: () => {
            return new Product('j')
          },
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          // 依赖
          deps: [
            Product
          ]
        },
        {
          provide: token,
          useValue: 'http://localhost:3000/api'
        }
      ]
    })

    // 获取
    console.log(injector.get(Product))
    console.log(injector.get(PurchaseOrder))
  }
}
