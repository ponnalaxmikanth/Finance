import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemunitsComponent } from './redeemunits.component';

describe('RedeemunitsComponent', () => {
  let component: RedeemunitsComponent;
  let fixture: ComponentFixture<RedeemunitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedeemunitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
