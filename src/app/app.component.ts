import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { ThemeService } from "./services/theme/theme.service";
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(
    private readonly themeService: ThemeService,
    private readonly userService: UserService,
  ) {
    this.isDarkThemeSubscription = this.themeService.isDarkTheme$().subscribe((isDarkTheme) => {
      this.isDarkTheme = isDarkTheme;
    });

    if (this.userService.isLogged())
      this.userService.setUpLoggedUser();
  }

  public isDarkTheme: boolean = true;

  private isDarkThemeSubscription: Subscription = new Subscription();

  private userSubscription: Subscription = new Subscription();

  public ngOnDestroy(): void {
    this.isDarkThemeSubscription.unsubscribe();
  }

}
