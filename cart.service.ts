import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = [];

  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  removeFromCart(index) {
    this.items.splice(index, 1);
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}
