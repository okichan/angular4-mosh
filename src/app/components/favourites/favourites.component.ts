import { Component, Input } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: []
})
export class FavouritesComponent {
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

   onDelete(id) {
      this.dataService.deleteUser(id).subscribe(res => {
         this.users.forEach((user, i) => {
            if (user.id === id) {
               this.users.splice(i, 1)
            }
         })
      })
   }
}
