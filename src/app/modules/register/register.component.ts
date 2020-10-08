import { Component, OnInit } from '@angular/core';
import { AuthService, SignUpData } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // onSubmit() {
  //   this.authService.register(this.form).subscribe(
  //     data => {
  //       console.log(data);
  //       this.isSuccessful = true;
  //       this.isSignUpFailed = false;
  //     },
  //     err => {
  //       this.errorMessage = err.error.message;
  //       this.isSignUpFailed = true;
  //     }
  //   );
  // }

  onSubmit() {
    // use rest operator to get a rest object without role
    const {role, ...rest} = this.form;
  
    // build userData, containing the role collected above
    // SignUpData is declared on Authentication.service
    const userData: SignUpData = {...rest, roles: [role]};
  
    // use the userData in your request
    this.authService.register(userData).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
