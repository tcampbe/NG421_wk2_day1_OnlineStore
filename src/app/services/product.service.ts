import { Injectable } from "@angular/core";
import { IProduct } from "../interfaces/iproduct";
import products from "../products";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  shoppingCart: IProduct[] = [];
  products: IProduct[];

  constructor() {
    this.products = products;
  }
  getproducts(): IProduct[] {
    return this.products;
  }

  getshoppingcart(): IProduct[] {
    return this.shoppingCart;
  }

  addToCart(products: IProduct) {
    this.shoppingCart.push(products);
  }
}
