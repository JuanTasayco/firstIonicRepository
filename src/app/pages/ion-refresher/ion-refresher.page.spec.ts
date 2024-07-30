import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonRefresherPage } from './ion-refresher.page';

describe('IonRefresherPage', () => {
  let component: IonRefresherPage;
  let fixture: ComponentFixture<IonRefresherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRefresherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
