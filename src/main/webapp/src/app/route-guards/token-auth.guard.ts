import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class TokenAuthGuard implements CanActivate {

  constructor(private myRoute: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const userInfo = localStorage.getItem('currentUser');
    if (userInfo) {
      return true;
    } else {
      this.myRoute.navigate(['/login']);
      return false;
    }
  }
}
