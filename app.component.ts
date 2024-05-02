import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Shopping Cart App</h1>
    <app-product-list></app-product-list>
    <app-cart></app-cart>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
