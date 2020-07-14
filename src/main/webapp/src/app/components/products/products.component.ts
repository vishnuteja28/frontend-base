import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductDetailsService} from "../../services/product-details.service";
import {escape} from "querystring";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  finalAnswer: string;
  isNewExpression : boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private spinnerService: NgxSpinnerService,
              private productDetailService: ProductDetailsService) {
  }


  ngOnInit() {
    this.finalAnswer = "";
  }

  viewDetails(value) {
    this.spinnerService.show();
    this.router.navigate(['/products/', value]);
    this.spinnerService.hide();
  }

  calculate() {

    this.productDetailService.getCalculatedValue(this.finalAnswer).subscribe((data) => {
      this.finalAnswer = data;
    });
    console.log(this.finalAnswer);
    this.isNewExpression = true;
  }

  clear() {
    this.finalAnswer = "";
    this.isNewExpression = true;
  }

  appendExpression(str: string) {
    if(this.isNewExpression){
      this.isNewExpression = false;
      this.finalAnswer = str;
    }else {
      this.finalAnswer = this.finalAnswer.concat(str);
    }
  }
}
