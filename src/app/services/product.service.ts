import { Injectable } from "@angular/core";
import { IProduct } from "../interfaces/iproduct";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  shoppingCart: IProduct[];
  products: IProduct[];
  constructor() {
    this.products=this.products;
  }
  getproducts() : IProduct[] {
    return this.products;
  }

  getshoppingcart() : IProduct[] {
    return this.shoppingCart;
  }

  addToCart(products: IProduct) {
    return this.shoppingCart.push(products);
  }
}
