import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventuraComicComponent } from './aventura-comic.component';

describe('AventuraComicComponent', () => {
  let component: AventuraComicComponent;
  let fixture: ComponentFixture<AventuraComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AventuraComicComponent]
    });
    fixture = TestBed.createComponent(AventuraComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
