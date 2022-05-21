import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }
  get isLoggedIn() { return this.userService.isLoggedIn(); }
  login(){
    this.userService.isLoggedIn();
  }
  logout() {
    this.userService.logout();
    //   this.resetSubscription();
    //   this.setTempUserId();
    this.router.navigate(['/login']);
  }

}
