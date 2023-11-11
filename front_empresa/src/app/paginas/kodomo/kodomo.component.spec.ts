import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KodomoComponent } from './kodomo.component';

describe('KodomoComponent', () => {
  let component: KodomoComponent;
  let fixture: ComponentFixture<KodomoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KodomoComponent]
    });
    fixture = TestBed.createComponent(KodomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
