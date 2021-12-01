import {FormControl} from "@angular/forms";

export class RestrictedEmailsValidator {
  static validator(control: FormControl): { [key: string]: boolean } | null {
    if (control.value.includes('.ru')) {
      return {restrictedRusEmail: true};
    }
    return null;
  }
}
