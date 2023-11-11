import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelicaComicComponent } from './belica-comic.component';

describe('BelicaComicComponent', () => {
  let component: BelicaComicComponent;
  let fixture: ComponentFixture<BelicaComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BelicaComicComponent]
    });
    fixture = TestBed.createComponent(BelicaComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
