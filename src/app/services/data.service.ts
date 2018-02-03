import { Injectable } from '@angular/core'

@Injectable()

export class DataService {
   users: string[]

   constructor() {
      this.users = ['Taro', "Hanako", "Pochi", "Koro"]
   }

   getUsers() {
      return this.users
   }
}