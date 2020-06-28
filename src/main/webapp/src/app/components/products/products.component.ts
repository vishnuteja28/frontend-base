import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from "ngx-spinner";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private spinnerService: NgxSpinnerService) {
  }


  ngOnInit() {
  }

  viewDetails(value) {
    this.spinnerService.show();
    this.router.navigate(['/products/', value]);
    this.spinnerService.hide();
  }

}
