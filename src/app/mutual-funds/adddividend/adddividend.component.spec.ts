import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddividendComponent } from './adddividend.component';

describe('AdddividendComponent', () => {
  let component: AdddividendComponent;
  let fixture: ComponentFixture<AdddividendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddividendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddividendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
