import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SegmentPage } from './segment.page';

describe('SegmentPage', () => {
  let component: SegmentPage;
  let fixture: ComponentFixture<SegmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
