import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoVendoComponent } from './como-vendo.component';

describe('ComoVendoComponent', () => {
  let component: ComoVendoComponent;
  let fixture: ComponentFixture<ComoVendoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoVendoComponent]
    });
    fixture = TestBed.createComponent(ComoVendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
