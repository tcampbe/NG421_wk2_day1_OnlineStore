import { Component, OnInit } from "@angular/core";
import { IProduct } from "./interfaces/iproduct";
import products from "./products";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  products: IProduct[];
  constructor() {}

  ngOnInit() {
  }
}
