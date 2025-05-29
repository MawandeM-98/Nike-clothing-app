import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-list',
  standalone:true,
  imports: [CommonModule,ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
    @for (product of products(); track product.id) {
     <app-product-card [product]="product"/>
    }
</div>
  `,
  styles: ``
})
export class ProductsListComponent {
products= signal<Product[]>([
  
  {
    "id": 1,
    "title": "Nike Windbreaker Jacket",
    "price": 109.95,
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMpE9a8S1e-Y_2jXfzsa_puF66t-SmU1fwdhk8fi5vLkpo75F328TCaoXRwKzaTFl-B3o6SLbgvjeHPrpUgRUC6aMDCRF6YBHU9O84sz9aHuWFLLrzf53dYq8D1GpDI-M_pQq32pk&usqp=CAc",
    "stock": 34
  },
  
  {
  "id": 2,
  "title": "Nike Trackpants",
  "price": 10.99,
  "image": "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTcHXmn1UDbk6gd8Bolqfg99osslLrAw6ToOQfcwwEo-uvI5mPnR426JLn-9q24u0-b6l3ob6xMU6Uq0RPeSSteymM3T2s2mNc3Aj-IKaDFSqQdrmQP6tgSt40OppCqolgrzoBNeg&usqp=CAc",
  "stock": 0
},
  {
    "id": 3,
    "title": "Womens Nike Top",
    "price": 55.99,
    "image": "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS0HzvoEigAqKS8Wc-3avWLRVQVB7lhUMUEXWcioPQouzlR7Y5fnk1H06FiJMTazTh3UZYak-MuZSS0eYnEawAteHhqjRhHWCztplkH-9PFqAcXY943ucOaR0Ad7TG6LukOjQ1VuAoL&usqp=CAc",
    "stock": 22
  },
  {
    "id": 4,
    "title": "Nike Premium Kicks",
    "price": 150.99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvVfhTrH1lPPAZVpYoUhPXYYUKsR6rBc0g4g&s",
    "stock": 40
  }
]
)
}
