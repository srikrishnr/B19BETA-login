import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  unsubscribe$: any;
  login: boolean = true;
  logout!: boolean
  submitted!: any;

  public localStorage = localStorage;

  private _accessToken: any;
  private _refreshToken: any;
  public showPassword: boolean = false;


  constructor(private userService: UserService, private router: Router) {
    // this._accessToken = localStorage.getItem('accessToken');
    // this._refreshToken = localStorage.getItem('refreshToken');
    //   // set initial value
    //     this.accessToken = "access1";
    //     this.refreshToken = "refresh1";



    //  }
    //  get accessToken(): string {
    //   return this._accessToken;
    // }

    // set accessToken(value: string) {
    //   this._accessToken = value;
    //   localStorage.setItem('accessToken', this.form.value.username)
    // }

    // get refreshToken(): string {
    //   return this._refreshToken;
    // }

    // set refreshToken(value: string) {
    //   this._refreshToken = value;
    //   localStorage.setItem('refreshToken', this.form.value.password)
  }
  ngOnInit(): void {
  }



  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(
      '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    )])
  });
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  submit() {
    const loginObserver = {
      next: (_x: any) => {
        console.log('User logged in')

        this.router.navigate(['/bookcart']);
      },
      // this.login = true;

      // window.location.href='https://bookcart.azurewebsites.net/';


      error: (err: any) => console.log(err)
    };
    console.log(this.form.value, "form value")
    this.userService.login(this.form.value.username, this.form.value.password).subscribe(loginObserver)



  //   console.log(res, "response")

  // });

  // this.submitted = true;
  // this.userService.login(this.formGroup.value,jfjfj).subscribe((data) => {
  //   if (this.userService.isLoggedIn()) {
  //     const redirect = this.userService.redirectUrl ? this.userService.redirectUrl : '/admin';
  //     this.router.navigate([redirect]);
  //   } else {
  //     this.loginError = 'Username or password is incorrect.';
  //   }
  // }
  //   error => this.error = error
  // );
}
public togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
}
}








  // ngOnDestroy() {
  //   this.unsubscribe$.next();
  //   this.unsubscribe$.complete();
  // }

  // constructor() { }


  // @Input() error: string | null;

  // @Output() submitEM = new EventEmitter();
  // Logout(user:any){

  // }




