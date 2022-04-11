import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  //requestline!: Requestline;
  requestline: Requestline = new Requestline();
  products!: Product[];
  

  constructor(
    private sys: SystemService,
    private reqlsvc: RequestlineService,
    private prdsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    //this.requestline.productId = +this.requestline.productId;
    this.reqlsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline added");
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`);
      },
      error: (err) => console.error(err)
    });
  }

  ngOnInit(): void {
  /*  this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug("Products:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
    */
    this.requestline.requestId = +this.route.snapshot.params["rid"];
    //this.reqlsvc.get(id).subscribe({
    this.prdsvc.list().subscribe({
      next: (res) => {
        console.debug("Requestline:", res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
  }
}
