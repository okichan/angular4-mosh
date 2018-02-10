import { AbstractControl, ValidationErrors } from "@angular/forms";
import { setTimeout } from "timers";


export class UsernameValidators {
   static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
      if ((control.value as string).indexOf(' ') >= 0)
         return { cannotContainSpace: true };
      else return null
   }

   static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            if (control.value === 'mosh') {
               resolve({ shouldBeUnique: true });
               console.log('username is mosh');
            }
            else 
               resolve(null);
         }, 2000)
      })
   }
}