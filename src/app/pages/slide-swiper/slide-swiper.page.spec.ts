import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlideSwiperPage } from './slide-swiper.page';

describe('SlideSwiperPage', () => {
  let component: SlideSwiperPage;
  let fixture: ComponentFixture<SlideSwiperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSwiperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
