import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfdailytrackerComponent } from './mfdailytracker.component';

describe('MfdailytrackerComponent', () => {
  let component: MfdailytrackerComponent;
  let fixture: ComponentFixture<MfdailytrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfdailytrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfdailytrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
