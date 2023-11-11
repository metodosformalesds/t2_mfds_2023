import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeinenComponent } from './seinen.component';

describe('SeinenComponent', () => {
  let component: SeinenComponent;
  let fixture: ComponentFixture<SeinenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeinenComponent]
    });
    fixture = TestBed.createComponent(SeinenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
