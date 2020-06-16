import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return true;
  }

  checkIfAdmin(url: string): boolean {
    if (this.authService.isAdmin) return true;

    this.authService.redirectUrl = url;
    this.router.navigate(['/home']);
    return false;
  }
}
