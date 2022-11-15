import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public setTheme(theme: 'dark' | 'light'): void {
    this.isDarkThemeSubject.next(theme === 'dark');
  }

  public isDarkTheme$(): Observable<boolean> {
    return this.isDarkThemeSubject.asObservable();
  }

}
