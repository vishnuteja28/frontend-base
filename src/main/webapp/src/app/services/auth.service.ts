import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from "../models/user.model";
import {AppConfigService} from "./app-config.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private appConfigService: AppConfigService) {
  }

  authenticate(username, password): Observable<User> {
    return this.http.post(`${this.appConfigService.getConfig().serviceUrls.uiServiceUrl}/api/v1/users/authenticate`, {
      username,
      password
    }).pipe(map((item) => item as User));

  }
}
