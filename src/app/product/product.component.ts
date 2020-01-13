import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export interface IProduct {
  productId: number;
  productName: string;
  producDescription: string;
  productReviews: string;
  productRating: number;
  imageUrl: string;
  productPrice: CurrencyPipe;
}

