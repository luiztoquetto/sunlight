import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { HeaderEnum, HeaderNavigationEnum } from "../../models/enums/header.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private readonly router: Router,
  ) { }

  @Input()
  public goTo: string = '';

  @Input()
  public condominiumName: string = 'aaa';

  public currentHeader: HeaderEnum = HeaderEnum.TABS;

  public headerEnum: typeof HeaderEnum = HeaderEnum;

  public navigation: HeaderNavigationEnum = HeaderNavigationEnum.GENERAL;

  public headerNavigationEnum: typeof HeaderNavigationEnum = HeaderNavigationEnum;

  public async redirectTo(): Promise<void> {
    await this.router.navigateByUrl(this.goTo);
  }

  public changeNavigation(currentNavigation: HeaderNavigationEnum): void {
    this.navigation = currentNavigation;
  }

}
