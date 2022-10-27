import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
  ) { }

  public async redirect(): Promise<void> {
    await this.router.navigateByUrl('/condominium-listing');
  }

}
