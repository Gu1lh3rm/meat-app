import { CartItemModel } from './../../models/cart-item/cart-item.model';
import { RadioOptionModel } from './../../models/radio/radio-option.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order/order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOptionModel[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ];

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  cartItems(): CartItemModel[] {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItemModel){
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel){
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItemModel){
    this.orderService.remove(item);
  }

}
