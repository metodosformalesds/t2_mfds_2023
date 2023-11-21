import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito.component';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;
 
  beforeEach(async(() => {
     TestBed.configureTestingModule({
       imports: [FormsModule],
       declarations: [CarritoComponent]
     })
       .compileComponents();
  }));
 
  beforeEach(() => {
     fixture = TestBed.createComponent(CarritoComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });
 
  it('should create', () => {
     expect(component).toBeTruthy();
  });
 
  // Añadimos un nuevo test para verificar si la variable carrito se renderiza correctamente en el DOM
  it('should render the carrito correctly', () => {
     const compiled = fixture.debugElement.nativeElement;
     expect(compiled.querySelector('p').textContent).toContain('Carrito: []');
  });
 
  // El resto de los tests se mantienen igual
  // ...
 });