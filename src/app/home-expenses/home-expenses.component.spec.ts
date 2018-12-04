import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExpensesComponent } from './home-expenses.component';

describe('HomeExpensesComponent', () => {
  let component: HomeExpensesComponent;
  let fixture: ComponentFixture<HomeExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
