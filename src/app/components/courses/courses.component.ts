import { DataService } from './../../services/data.service';
import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
   selector: "app-courses",
   templateUrl: './courses.component.html',
   styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent implements OnInit {
   
   constructor(service: CoursesService, public dataservice: DataService) {
      this.courses = service.getCourses()
      this.users = dataservice.getUsersTest();
      this.dataservice.getData().subscribe(data => {
         this.ep36Data.push(data)
      })
   }
   
   ep36Data: any[] = []
   title = "List of courses";
   courses;
   users: string[]
   imageUrl = 'https://picsum.photos/50/50?random'

   iAm: string = "I am a typescript property I think."
   isDisabled = true
   isActive = true
   isValid = false
   email: string = "me@example.com"
   price: number = 1980
   date = new Date()
   aLongText = ALongText
   todo: string = ""
   todos: string[] = []
   user = {
      name: '',
      email: '',
      phone: ''
   }

   
   clickHandler(e) {
      e.stopPropagation()
      alert(`X position is ${e.screenX}`)
   }

   divClicked() {
      alert('wut')
   }
   
   onKeyUp() {
         alert("You pressed enter.")
   }
   
   onSubmitEmail() {
      alert(this.email)
   }

   onSubmit({value, valid}) {
      if (valid) {
         this.todos.unshift(this.todo)
         this.todo = ''
      } 
   }

   onDeleteItem(i) {
      this.todos.splice(i, 1)
      console.log("todo deleted: ", i);
   }

   onSubmitForm({value, valid}) {
      if(valid) {
         console.log(value);
         
      } else {
         console.log("Form is invalid.");
         
      }
   }
   
   ngOnInit() {}
}

const ALongText = `
Let's dance put on your red shoes and dance the blues

   Let's dance to the song 
   they're playin' on the radio
   
   Let's sway 
   while color lights up your face
   Let's sway 
   sway through the crowd to an empty space
   
   If you say run, I'll run with you
   If you say hide, we'll hide
   Because my love for you
   Would break my heart in two
   If you should fall
   Into my arms
   And tremble like a flower
`