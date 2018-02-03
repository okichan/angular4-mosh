import { Component, OnInit, Input } from "@angular/core";
import { isFulfilled } from "q";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: []
})
export class FavouritesComponent implements OnInit {
   @Input() isFavourite: boolean = false;
   
   users: any[]
   user = {
      name: '',
      email: '',
      phone: ''
   }
   constructor(public dataService: DataService) {
      this.isFavourite = false
      this.dataService.getUsers().subscribe(users => {
         console.log(users);
         this.users = users
         
      })
  }

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

  onSubmit() {
     this.dataService.addUser(this.user).subscribe(user => {
        console.log(user);
        this.users.unshift(user)
     })
  }
}
