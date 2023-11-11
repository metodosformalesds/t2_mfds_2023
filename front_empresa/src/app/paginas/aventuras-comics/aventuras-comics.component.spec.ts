import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AventurasComicsComponent } from './aventuras-comics.component';

describe('AventurasComicsComponent', () => {
  let component: AventurasComicsComponent;
  let fixture: ComponentFixture<AventurasComicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AventurasComicsComponent]
    });
    fixture = TestBed.createComponent(AventurasComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
