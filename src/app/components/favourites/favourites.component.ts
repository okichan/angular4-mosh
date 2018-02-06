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

   isEdit: boolean = false

   constructor(public dataService: DataService) {
      this.isFavourite = false
      this.dataService.getUsers().subscribe(users => {
         this.users = users
      })
   }

   onClick() {
      this.isFavourite = !this.isFavourite;
   }

   onSubmit(isEdit) {
      if (isEdit) {
         this.dataService.updateUser(this.user).subscribe(user => {
            this.users.forEach((user, i) => {
               if (this.users[i].id === user.id) {
                  this.users.splice(i, 1)
               }
            })
         this.users.unshift(this.user)
         })
      } else {
         this.dataService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user)
         })
      }
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
   
   onEdit(user) {
      this.isEdit = true;
      this.user = user
   }
   
}
