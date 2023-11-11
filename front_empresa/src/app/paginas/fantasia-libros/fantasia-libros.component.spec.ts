import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FantasiaLibrosComponent } from './fantasia-libros.component';

describe('FantasiaLibrosComponent', () => {
  let component: FantasiaLibrosComponent;
  let fixture: ComponentFixture<FantasiaLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FantasiaLibrosComponent]
    });
    fixture = TestBed.createComponent(FantasiaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
