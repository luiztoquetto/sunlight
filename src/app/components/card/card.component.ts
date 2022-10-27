import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  constructor(
    private readonly router: Router,
  ) { }

  @Input()
  public title: string = '';

  @Input()
  public description: string = '';

  @Input()
  public link: string = '';

  public async redirect(): Promise<void> {
    await this.router.navigateByUrl(this.link);
  }

}
