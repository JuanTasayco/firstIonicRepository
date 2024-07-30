import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarPage } from './progress-bar.page';

describe('ProgressBarPage', () => {
  let component: ProgressBarPage;
  let fixture: ComponentFixture<ProgressBarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
