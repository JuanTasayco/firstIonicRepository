import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateTimesPage } from './date-times.page';

describe('DateTimesPage', () => {
  let component: DateTimesPage;
  let fixture: ComponentFixture<DateTimesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTimesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
