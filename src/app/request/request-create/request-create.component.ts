import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { VendorService } from 'src/app/vendor/vendor.service';
import { RequestService } from '../request.service';
import { Request } from '../request-class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  get isAdmin() { 
    if(!this.sys.isLoggedIn) {
      return false;
    } 
    return this.sys.getLoggedInUser()?.isAdmin; 
  }

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private vncsvc: VendorService,
    private router: Router
  ) { }

  save(): void {
    this.request.userId = this.sys.getLoggedInUser()!.id;
    this.reqsvc.create(this.request).subscribe({
      next: (res) => {
        console.debug("Request created");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
