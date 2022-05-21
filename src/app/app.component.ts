import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'B19BETA';
  constructor(private userService:UserService
    // private vcr:ViewContainerRef,
    // private cfr:ComponentFactoryResolver
  ){}
  // async loadlogin(){
  //   this.vcr.clear();
  //   const {LoginComponent}=await import('./login/login.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(LoginComponent)
  //   )
  // }
  // async loadlogout(){
  //   this.vcr.clear();
  //   const {LogoutComponent}=await import('./logout/logout.component');
  //   this.vcr.createComponent(
  //     this.cfr.resolveComponentFactory(LogoutComponent)
  //   )
  // }
  get isLoggedIn() { return this.userService.isLoggedIn(); }
  login(){
    this.userService.isLoggedIn();
  }
}
