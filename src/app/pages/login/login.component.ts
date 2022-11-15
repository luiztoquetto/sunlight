import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import usersJson from "users.json";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) { }

  public email: string = '';
  public password: string = '';

  public async login(): Promise<void> {
    const userWithEmail = usersJson.users.find(user => user.email === this.email);

    if (userWithEmail && userWithEmail.password === this.password) {
      this.userService.setLoggedUser(userWithEmail);
      
      await this.router.navigateByUrl('/condominium-listing');
    }
  }

}
