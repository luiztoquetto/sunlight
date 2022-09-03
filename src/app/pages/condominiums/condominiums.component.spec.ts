import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondominiumsComponent } from './condominiums.component';

describe('CondominiumsComponent', () => {
  let component: CondominiumsComponent;
  let fixture: ComponentFixture<CondominiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondominiumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CondominiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
