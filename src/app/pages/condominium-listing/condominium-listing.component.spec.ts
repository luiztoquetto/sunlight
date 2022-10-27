import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumListingComponent } from './condominium-listing.component';

describe('CondominiumListingComponent', () => {
  let component: CondominiumListingComponent;
  let fixture: ComponentFixture<CondominiumListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominiumListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
