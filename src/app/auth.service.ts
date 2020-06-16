import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdmin: boolean = false;
  redirectUrl: string;

  constructor() { }
}
