import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HispanoamericanosLibrosComponent } from './hispanoamericanos-libros.component';

describe('HispanoamericanosLibrosComponent', () => {
  let component: HispanoamericanosLibrosComponent;
  let fixture: ComponentFixture<HispanoamericanosLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HispanoamericanosLibrosComponent]
    });
    fixture = TestBed.createComponent(HispanoamericanosLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
