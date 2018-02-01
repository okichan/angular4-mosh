import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
   selector: "app-courses",
   templateUrl: './courses.component.html',
   styleUrls: ["./courses.component.scss"]
})
export class CoursesComponent implements OnInit {
   constructor(service: CoursesService) {
      this.courses = service.getCourses()
   }

   title = "List of courses";
   courses;
   imageUrl = 'https://picsum.photos/200/300'

   iAm: string = "I am a typescript property I think."
   isDisabled = true
   
   email: string = "me@example.com"
   price: number = 1980
   date = new Date()
   aLongText:string = `Let's dance put on your red shoes and dance the blues

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
   And tremble like a flower`

   todo: string = ""
   todos: string[] = []
   
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

   onSubmit() {
      this.todos.unshift(this.todo)
      this.todo = ''
   }

   onDeleteItem(i) {
      this.todos.splice(i, 1)
      console.log("todo deleted: ", i);
      
   }

   ngOnInit() {}
}
