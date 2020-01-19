import { Injectable } from "@angular/core";
import { IProduct } from "../interfaces/iproduct";
import products from "../products";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  shoppingCart: IProduct[];
  Products: IProduct[];

  constructor() {
    this.Products = products;
  }
  getproducts(): IProduct[] {
    return this.Products;
  }

  getshoppingcart(): IProduct[] {
    return this.shoppingCart;
  }

  addToCart(products: IProduct): IProduct[] {
    this.shoppingCart.push(products);
    return this.shoppingCart;
  }
}
