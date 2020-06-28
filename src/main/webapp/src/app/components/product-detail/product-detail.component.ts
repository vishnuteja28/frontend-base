import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductDetailsService} from "../../services/product-details.service";
import {ProductDetails} from "../../models/product-details.model";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productDetails: ProductDetails = new ProductDetails();

  constructor(private activatedRoute: ActivatedRoute, private productDetailService: ProductDetailsService) {
    this.productDetails.imageUrl = "mango";
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const productId = params['id'];
      if (productId) {
        this.getProductDetails(productId);
      }
    });
  }

  getProductDetails(productId: string) {
    this.productDetailService.getProductDetails(productId).subscribe((data) => {
      this.productDetails = data;
    });
  }

}
