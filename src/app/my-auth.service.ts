import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyAuthService {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  constructor() { }
}
