import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExpenseComponent } from './home-expense.component';

describe('HomeExpenseComponent', () => {
  let component: HomeExpenseComponent;
  let fixture: ComponentFixture<HomeExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
