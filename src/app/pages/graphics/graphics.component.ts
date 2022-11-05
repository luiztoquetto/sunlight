import { CondominiumEntity } from 'src/app/models/entities/condominium.entity';
import { Component } from '@angular/core';
import condominiumsJson from "condominiums.json";
import { ActivatedRoute } from '@angular/router';
import { HeaderEnum } from 'src/app/models/enums/header.enum';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get('condominiumId');

    if (id)
      this.condominium = condominiumsJson.condominiums.find(c => c.id === +id);
  }

  public condominium?: CondominiumEntity;

  public headerEnum: typeof HeaderEnum = HeaderEnum;

}
