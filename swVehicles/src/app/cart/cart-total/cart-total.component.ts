import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'sw-cart-total',
  templateUrl: './cart-total.component.html',
  standalone: true,
  imports: [ CommonModule ]
})
export class CartTotalComponent {

  cartItems$ = this.cartService.cartItems$;

  subTotal$ = this.cartService.subTotal$;

  deliveryFee$ = this.cartService.deliveryFee$;

  tax$ = this.cartService.tax$;

  totalPrice$ = this.cartService.totalPrice$;
  
  constructor(private cartService: CartService) { }

}
