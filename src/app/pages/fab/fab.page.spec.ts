import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FabPage } from './fab.page';

describe('FabPage', () => {
  let component: FabPage;
  let fixture: ComponentFixture<FabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
