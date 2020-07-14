import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDetailsService} from "../../services/product-details.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  expression: string;

  constructor(private route: ActivatedRoute, private router: Router, private spinnerService: NgxSpinnerService,
              private productDetailService: ProductDetailsService) {
  }


  ngOnInit() {
    this.expression = "";
  }

  viewDetails(value) {
    this.spinnerService.show();
    this.router.navigate(['/products/', value]);
    this.spinnerService.hide();
  }

  calculate() {

    this.productDetailService.getCalculatedValue(this.expression).subscribe((data) => {
      this.expression = data;
    });
    console.log(this.expression);
  }

  clear() {
    this.expression = "";
  }

  appendExpression(str: string) {

    this.expression = this.expression.concat(str);
  }
}
