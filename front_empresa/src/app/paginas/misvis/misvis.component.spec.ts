import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisvisComponent } from './misvis.component';

describe('MisvisComponent', () => {
  let component: MisvisComponent;
  let fixture: ComponentFixture<MisvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MisvisComponent]
    });
    fixture = TestBed.createComponent(MisvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
