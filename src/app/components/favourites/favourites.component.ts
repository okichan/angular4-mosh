import { Component, OnInit, Input } from "@angular/core";
import { isFulfilled } from "q";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: []
})
export class FavouritesComponent implements OnInit {
   @Input() isFavourite: boolean = false;
   
   constructor() {
      this.isFavourite = false
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }
  ngOnInit() {}
}
