import { UserService } from './../../services/user/user.service';
import { Component } from '@angular/core';
import { Router } from "@angular/router";
import usersJson from "users.json";
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly toastService: ToastService,
  ) { }

  public email: string = '';
  public password: string = '';

  public async login(): Promise<void> {
    if (!this.email || this.email.trim().length <= 5)
      return this.toastService.showError({ message: 'Por favor, insira um e-mail válido' });

    if (!this.password || this.password.trim().length <= 5)
      return this.toastService.showError({ message: 'Por favor, insira uma senha válida' });

    const userWithEmail = usersJson.users.find(user => user.email === this.email);

    if (!userWithEmail || userWithEmail?.password !== this.password)
      return this.toastService.showError({ message: 'Usuário não encontrado ou senha incorreta' });

    this.userService.setLoggedUser(userWithEmail);
    await this.router.navigateByUrl('/condominium-listing');
  }

}
