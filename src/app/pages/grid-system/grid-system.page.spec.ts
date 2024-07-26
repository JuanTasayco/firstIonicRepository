import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridSystemPage } from './grid-system.page';

describe('GridSystemPage', () => {
  let component: GridSystemPage;
  let fixture: ComponentFixture<GridSystemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
