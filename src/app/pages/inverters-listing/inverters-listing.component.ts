import { CondominiumEntity } from './../../models/entities/condominium.entity';
import { InversorEntity } from './../../models/entities/inversor.entity';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import inversoresJson from "inversores.json";
import condominiumsJson from "condominiums.json";
import { HeaderEnum, HeaderNavigationEnum } from 'src/app/models/enums/header.enum';

@Component({
  selector: 'app-inverters-listing',
  templateUrl: './inverters-listing.component.html',
  styleUrls: ['./inverters-listing.component.scss']
})
export class InvertersListingComponent {

  constructor(
    private readonly activatedRoute: ActivatedRoute,
  ) {
    const condominiumId = this.activatedRoute.snapshot.paramMap.get('condominiumId');

    if (condominiumId) {
      this.condominium = condominiumsJson.condominiums.find(c => c.id === +condominiumId);
      this.list = inversoresJson.inversores.filter(i => i.condominiumId === +condominiumId);
      this.condominiumId = +condominiumId;
    }
  }

  public condominium?: CondominiumEntity;

  public list: InversorEntity[] = [];

  public condominiumId: number = 0;

  public headerEnum: typeof HeaderEnum = HeaderEnum;

  public navigationEnum: typeof HeaderNavigationEnum = HeaderNavigationEnum;

 }
