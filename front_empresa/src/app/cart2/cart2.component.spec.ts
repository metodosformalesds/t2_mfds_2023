import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Cart2Component } from './cart2.component';

describe('Cart2Component', () => {
 let component: Cart2Component;
 let fixture: ComponentFixture<Cart2Component>;

 beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ Cart2Component ]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
     fixture = TestBed.createComponent(Cart2Component);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });
 
  it('should create', () => {
     expect(component).toBeTruthy();
  });
 });