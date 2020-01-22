import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-rating-stars",
  templateUrl: "./rating-stars.component.html",
  styleUrls: ["./rating-stars.component.css"]
})
export class RatingStarsComponent implements OnInit {
  @Input() rating: number;

  stars: number[] = [];
  noStars: number[] = [];
  readonly MAX_RATING: number = 5;

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.MAX_RATING ; i++) {
      if (i < this.rating) {
        this.stars.push(i);
      } else {
        this.noStars.push(i);
      }
    }
  }
}
