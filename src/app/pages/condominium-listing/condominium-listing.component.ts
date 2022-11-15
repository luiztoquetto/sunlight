import { Unsubscribable } from 'rxjs';
import { UserService } from './../../services/user/user.service';
import { Component, OnDestroy } from '@angular/core';
import { CondominiumEntity } from 'src/app/models/entities/condominium.entity';
import condominiumsJson from "condominiums.json";
import { Router } from '@angular/router';

@Component({
  selector: 'app-condominium-listing',
  templateUrl: './condominium-listing.component.html',
  styleUrls: ['./condominium-listing.component.scss']
})
export class CondominiumListingComponent implements OnDestroy {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
  ) {
    this.userSubscription = this.userService.subscribeLoggedUserForChanges(user => {
      if (user) {
        if (user.role === 'admin')
          this.list = condominiumsJson.condominiums;
        else
          this.list = condominiumsJson.condominiums.filter(c => c.userIds.includes(user.id));
      }

    });
  }

  public list: CondominiumEntity[] = [];

  private userSubscription: Unsubscribable;

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  logout(): void {
    this.userService.clearLoggedUser();
    this.router.navigateByUrl('login');
  }
 }
