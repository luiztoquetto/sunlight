import { Component } from '@angular/core';
import { HeaderEnum } from "../../models/enums/header.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public current: HeaderEnum = HeaderEnum.TABS;

  public headerEnum: typeof HeaderEnum = HeaderEnum;

}
