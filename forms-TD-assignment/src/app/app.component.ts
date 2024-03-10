import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') testForm!: NgForm;
  public subscriptionMode: string[] = ['Basic', 'Advanced', 'Pro'];
  public formSubmitted: boolean = false;
  public selectedSubscription: string = 'Advanced'
  user = {
    email: "",
    subscription: "",
    password: ""
  }

  onSubmit(): void {
    this.formSubmitted = true;
    this.user.email = this.testForm.value.userData.email;
    this.user.subscription = this.testForm.value.userData.subscription;
    this.user.password = this.testForm.value.userData.password;
    console.log(this.user);
    this.testForm.reset();
  }
}
