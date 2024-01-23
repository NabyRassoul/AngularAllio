import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authService.tokenVal;
    if (!currentUser) {
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
      localStorage.removeItem('user-token');
      return false;
    }else
      return true;
  }
}
