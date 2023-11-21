import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComediaComicComponent } from './comedia-comic.component';

describe('ComediaComicComponent', () => {
  let component: ComediaComicComponent;
  let fixture: ComponentFixture<ComediaComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComediaComicComponent]
    });
    fixture = TestBed.createComponent(ComediaComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
