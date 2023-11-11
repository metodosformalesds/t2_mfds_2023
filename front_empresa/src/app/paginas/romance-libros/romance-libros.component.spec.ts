import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanceLibrosComponent } from './romance-libros.component';

describe('RomanceLibrosComponent', () => {
  let component: RomanceLibrosComponent;
  let fixture: ComponentFixture<RomanceLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomanceLibrosComponent]
    });
    fixture = TestBed.createComponent(RomanceLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
