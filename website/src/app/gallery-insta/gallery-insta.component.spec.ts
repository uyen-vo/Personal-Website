import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryInstaComponent } from './gallery-insta.component';

describe('GalleryInstaComponent', () => {
  let component: GalleryInstaComponent;
  let fixture: ComponentFixture<GalleryInstaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryInstaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryInstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
