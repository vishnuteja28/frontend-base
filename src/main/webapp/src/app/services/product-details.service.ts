import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {ProductDetails} from "../models/product-details.model";
import {AppConfigService} from "./app-config.service";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private _http: HttpClient, private appConfigService: AppConfigService) {
  }

  getProductDetails(productId: string) {
    return this._http.get(`${this.appConfigService.getConfig().serviceUrls.uiServiceUrl}/api/v1/products/${productId}`).pipe(
      map((res: ProductDetails) => res));
  }

  getCalculatedValue(expression: string): Observable<string> {
    return this._http.get(`${this.appConfigService.getConfig().serviceUrls.uiServiceUrl}/api/v1/products/calculate/${expression}`).pipe(
      map((res: string) => res));

  }
}
