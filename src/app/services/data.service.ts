import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Injectable()

export class DataService {
   data: Observable<Array<string>>
   users: string[]

   constructor() {
      this.users = ['Taro', "Hanako", "Pochi", "Koro"]
   }

   getUsers() {
      return this.users
   }

   getData() {
      this.data = new Observable(observer => {
         setTimeout(() => {
            observer.next(['3'])
         }, 1000)
         setTimeout(() => {
            observer.next(['2'])
         }, 2000)
         setTimeout(() => {
            observer.next(['1'])
         }, 3000)
         setTimeout(() => {
            observer.next(['💩'])
         }, 4000)
         setTimeout(() => {
            observer.complete()
         }, 5000)
      })
      return this.data
   }
}