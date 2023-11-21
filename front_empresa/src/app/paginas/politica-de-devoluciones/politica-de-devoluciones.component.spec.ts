import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticaDeDevolucionesComponent } from './politica-de-devoluciones.component';

describe('PoliticaDeDevolucionesComponent', () => {
  let component: PoliticaDeDevolucionesComponent;
  let fixture: ComponentFixture<PoliticaDeDevolucionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoliticaDeDevolucionesComponent]
    });
    fixture = TestBed.createComponent(PoliticaDeDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
