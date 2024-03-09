import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm!: NgForm;
  defaultQuestion: string = 'pet';
  answer: string = '';
  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    //* Set value to override the entire form, and patch value to override certain parts of the form.
    //this.signupForm.setValue({
    //  userData: {
    //    username: suggestedName,
    //    email: '',
    //  },
    //  secret: 'pet',
    //  questionAnswer: '',
    //  gender: 'male'
    //});

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });

  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
