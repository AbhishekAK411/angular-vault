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
  user ={
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted: boolean = false;

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

 // onSubmit(form: ngForm) {
 //   console.log(form);
 // }

  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    // resets entire form state as well including the valid, touched, and value objects as well.
    this.signupForm.reset();
  }
}
