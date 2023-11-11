import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBalanceComponent } from './mi-balance.component';

describe('MiBalanceComponent', () => {
  let component: MiBalanceComponent;
  let fixture: ComponentFixture<MiBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiBalanceComponent]
    });
    fixture = TestBed.createComponent(MiBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
