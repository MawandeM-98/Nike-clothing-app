import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  template: `
<div class="p-6 flex flex-col gap-4">
  <h2 class="text-2xl"> Shopping Cart</h2>
  @for (item of cartService.cart(); track item.id) {}
</div>
  `,
  styles: ``
})
export class CartComponent {
cartService = inject(CartService);

}
