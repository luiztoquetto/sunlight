import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { ThemeService } from "./services/theme/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(
    private readonly themeService: ThemeService,
  ) {
    this.isDarkThemeSubscription = this.themeService.isDarkTheme$().subscribe((isDarkTheme) => {
      this.isDarkTheme = isDarkTheme;
    });
  }

  public isDarkTheme: boolean = true;
  private isDarkThemeSubscription: Subscription = new Subscription();

  public ngOnDestroy(): void {
    this.isDarkThemeSubscription.unsubscribe();
  }
}
