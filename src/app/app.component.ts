import { Component, OnInit } from "@angular/core";
import { IProduct } from "./interfaces/iproduct";
import { ProductService } from './services/product.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  products: IProduct[];
  constructor(private productService: ProductService) {
    
  }

  ngOnInit() {
    this.products = this.productService.getproducts();
  }

  productWasAdded(product: IProduct): void {
    this.productService.addToCart(product);
  }
}
