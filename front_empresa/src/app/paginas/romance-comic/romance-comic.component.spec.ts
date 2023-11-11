import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceComicComponent } from './romance-comic.component';

describe('RomanceComicComponent', () => {
  let component: RomanceComicComponent;
  let fixture: ComponentFixture<RomanceComicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanceComicComponent]
    });
    fixture = TestBed.createComponent(RomanceComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
