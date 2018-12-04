import { CartItemModel } from './../../../models/cart-item/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() items: CartItemModel[]

  @Output() increaseQty = new EventEmitter<CartItemModel>()

  @Output() decreaseQty = new EventEmitter<CartItemModel>()

  @Output() remove = new EventEmitter<CartItemModel>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: CartItemModel){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: CartItemModel){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: CartItemModel){
    this.remove.emit(item)
  }

}
