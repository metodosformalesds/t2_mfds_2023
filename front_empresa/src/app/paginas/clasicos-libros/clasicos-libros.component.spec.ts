import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicosLibrosComponent } from './clasicos-libros.component';

describe('ClasicosLibrosComponent', () => {
  let component: ClasicosLibrosComponent;
  let fixture: ComponentFixture<ClasicosLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClasicosLibrosComponent]
    });
    fixture = TestBed.createComponent(ClasicosLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
