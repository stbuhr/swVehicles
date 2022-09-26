import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'sw-cart-list',
  template: `
    <div *ngFor="let item of cartItems$ | async">
      <sw-cart-item [item]="item"></sw-cart-item>
    </div>
  `,
  standalone: true,
  imports: [CartItemComponent, CommonModule],
})
export class CartListComponent {
  cartItems$ = this.cartService.cartItems$;

  constructor(private cartService: CartService) {}
}
