import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-current-info-card',
  templateUrl: './current-info-card.component.html',
  styleUrls: ['./current-info-card.component.scss']
})
export class CurrentInfoCardComponent {

  @Input()
  public title: string = '';

  @Input()
  public description: string = '';

}
