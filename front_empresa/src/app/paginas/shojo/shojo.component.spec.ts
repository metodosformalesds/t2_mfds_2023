import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShojoComponent } from './shojo.component';

describe('ShojoComponent', () => {
  let component: ShojoComponent;
  let fixture: ComponentFixture<ShojoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShojoComponent]
    });
    fixture = TestBed.createComponent(ShojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
