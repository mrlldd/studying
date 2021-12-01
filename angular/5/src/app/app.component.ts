import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RestrictedEmailsValidator} from "../restricted-emails.validator";

const mapCity = new Map<string, string>([['ua', "Киев"], ['pl', "Варшава"], ['de', "Берлин"]])

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, RestrictedEmailsValidator.validator]),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('Запорожье', [Validators.required, Validators.minLength(3)])
      }),
      skills: new FormArray([])
    });
  }

  submit(): void {
    const formControl = {...this.form.value};
    console.log(formControl);
    this.form.reset();
  }

  setCapital(): void {
    const getCity = this.form.get('address')?.value.country;
    this.form.get('address')?.patchValue({city: mapCity.get(getCity)});
  }

  addSkill(): void {
    const control = new FormControl('', Validators.required);
    (<FormArray>this.form.get('skills')).push(control);
  }

  removeSkill(id: number): void {
    const array = this.form.get('skills') as FormArray;
    array.removeAt(id);
  }

  unwrap(array: AbstractControl): AbstractControl[] {
    return (<FormArray>array).controls
  }

}
