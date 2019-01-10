import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundvalueComponent } from './fundvalue.component';

describe('FundvalueComponent', () => {
  let component: FundvalueComponent;
  let fixture: ComponentFixture<FundvalueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundvalueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
