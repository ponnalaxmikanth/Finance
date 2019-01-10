import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundtransactionsComponent } from './fundtransactions.component';

describe('FundtransactionsComponent', () => {
  let component: FundtransactionsComponent;
  let fixture: ComponentFixture<FundtransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundtransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
