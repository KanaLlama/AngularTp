import { Component, OnInit } from '@angular/core';
import { MyAuthService } from '../my-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: MyAuthService) {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }
}
