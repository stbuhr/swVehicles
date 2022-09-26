import { Component } from '@angular/core';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@Component({
  template: `
  <div class='row'>
    <div class='col-md-6'>
        <sw-cart-list></sw-cart-list>
    </div>
    <div class='col-md-6'>
        <sw-cart-total></sw-cart-total>
    </div>
  </div>
  `,
  standalone: true,
  imports: [ CartTotalComponent, CartListComponent ]
})
export class CartShellComponent {

  constructor() { }

}
