import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { SystemService } from 'src/app/system.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  pageTitle: string = "PRS Login";
  showVerifyButton: boolean = false;
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  username: string = "sa";
  password: string = "sa";
  msg: string = "";

  constructor(
    private usesvc: UserService,
    private sys: SystemService,
    private router: Router
  ) { }

  login(): void {
    this.msg = "";
    this.usesvc.login(this.username, this.password).subscribe({
      next: (res) => {
        console.debug("Login is successful!");
        this.sys.setLoggedInUser(res);
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        if(err.status == 404) {
          this.msg = "Username/Password is not found";
        } else {
          console.error(err);
        }
      }
    });
  }


  ngOnInit(): void {
  }

}
