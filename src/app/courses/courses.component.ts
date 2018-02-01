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
   name = ''
   imageUrl = 'https://picsum.photos/200/300'

   iAm: string = "I am a typescript property I think."
   isDisabled = true

   clickHandler(e) {
      e.stopPropagation()
      alert(`X position is ${e.screenX}`)
   }

   divClicked() {
      alert('wut')
   }
   
   onKeyUp() {
         alert("Enter was pressed.")
   }
   
   ngOnInit() {}
}
