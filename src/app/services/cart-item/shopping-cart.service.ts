import { MenuItemModel } from './../../models/restaurant/menu-item.model';
import { CartItemModel } from './../../models/cart-item/cart-item.model';
export class ShoppingCartService{
  items: CartItemModel[] = [];

  clear(){
    this.items = []
  }

  addItem(item: MenuItemModel) {
    let foundItem = this.items.find((nItem)=> nItem.menuItem.id === item.id)
    if(foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItemModel(item));
    }
  }

  removeItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
