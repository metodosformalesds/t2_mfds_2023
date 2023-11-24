import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MiBalanceComponent } from './mi-balance.component';

describe('MiBalanceComponent', () => {
 let component: MiBalanceComponent;
 let fixture: ComponentFixture<MiBalanceComponent>;

 beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiBalanceComponent ]
    })
    .compileComponents();
 });

 beforeEach(() => {
    fixture = TestBed.createComponent(MiBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 });

 it('should create', () => {
    expect(component).toBeTruthy();
 });
});