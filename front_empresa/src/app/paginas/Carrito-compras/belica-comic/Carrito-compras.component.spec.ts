import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carritocomprascomponent } from './Carrito-compras.component';

describe('Carritocomprascomponent', () => {
  let component: Carritocomprascomponent;
  let fixture: ComponentFixture<Carritocomprascomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Carritocomprascomponent]
    });
    fixture = TestBed.createComponent(Carritocomprascomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
