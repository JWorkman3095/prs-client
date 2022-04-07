import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  vendors!: Vendor[];

  constructor(
    private prodsvc: ProductService,
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router    
  ) { }

  save(): void {
    this.prodsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product updated");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        console.debug("Customers:", res);
        this.vendors = res;
      },
      error: (err) => { console.error(err); }
    });
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendors:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
