import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PagoComponent } from './pago.component';

describe('CartComponent', () => {
 let component: PagoComponent;
 let fixture: ComponentFixture<PagoComponent>;

 beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ PagoComponent ]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
     fixture = TestBed.createComponent(PagoComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });
 
  it('should create', () => {
     expect(component).toBeTruthy();
  });
 });