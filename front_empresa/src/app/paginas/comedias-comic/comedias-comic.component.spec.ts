import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComediasComicComponent } from './comedias-comic.component';

describe('ComediasComicComponent', () => {
  let component: ComediasComicComponent;
  let fixture: ComponentFixture<ComediasComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComediasComicComponent]
    });
    fixture = TestBed.createComponent(ComediasComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
